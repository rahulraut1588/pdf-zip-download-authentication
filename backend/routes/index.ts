import { AuthController } from '../controller/AuthController';
import { UserController } from '../controller/UserController';
import { PdfController } from '../controller/PdfController';
import cors from 'cors';
import bodyParser from 'body-parser';

export class Routes {

    public authController: AuthController = new AuthController();
    public userController: UserController = new UserController()
    public pdfController: PdfController = new PdfController()

    routes ( app:any) {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.options('*', cors());

        app.get('/', cors(), this.authController.authenticationService, this.authController.rootPage);

        app.get('/users', cors(), this.authController.authenticationService, this.userController.getUsers);

        app.get('/user/:id', cors(), this.authController.authenticationService, this.userController.getUser);

        app.get('/downloadPdf/:id', cors(), this.authController.noAuthenticationService, this.pdfController.downloadPdf);
        
        app.get('/download/:id', cors(), this.authController.noAuthenticationService, this.pdfController.downloadPdf);

        app.get('/bulkdownload', cors(), this.authController.noAuthenticationService, this.pdfController.bulkDownload);
        
        app.post('/login', cors(), this.authController.authenticationService, this.userController.getUserByEmail);
        
        app.post('/register', cors(), this.authController.authenticationService, this.userController.registerUser);

    }
    
}