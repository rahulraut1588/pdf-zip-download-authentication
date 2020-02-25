import { Response, Request, NextFunction } from 'express';
import { UserRepository } from '../repository/UserRepository';
import { ResumeService } from '../services/resume-servie';

export class UserController {

    public userRepository : UserRepository = new UserRepository();
    public resumeService: ResumeService = new ResumeService();

    getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await this.userRepository.getUsers();
            if ( !users ) {
                res.status(404).send( 'Users Not Found' );
            } else {
                res.status(200).json(users);
            }
        } catch ( error) {
            next(error);
        }
    }

    getUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.getUser(req.params.id);
            if ( !user ) {
                res.status(404).send(' User Not Found ');
            } else {
                res.status(200).json(user);
            }
        } catch ( error) {
            next(error);
        }
    }

    getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.getUserByEmail(req.body);
            if ( !user ) {
                res.status(404).send(' User Not Found ');
            } else {
                res.status(200).json(user);
            }
        } catch ( error) {
            next(error);
        }
    }

    registerUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.register(req.body);
            if ( !user ) {
                res.status(404).send(' User Not Registered ');
            } else {
                const registeredUser = await this.userRepository.getUserByEmail(req.body);
                res.status(200).json(registeredUser);
            }
        } catch ( error) {
            next(error);
        }
    }

    
}