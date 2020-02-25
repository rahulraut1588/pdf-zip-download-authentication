export class TestController {

    public test = async ( req, res ) => {
        console.log(req);
        res.status(200).send('This is root path text');
    }
}