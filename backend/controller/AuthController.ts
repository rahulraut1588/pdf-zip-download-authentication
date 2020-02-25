import { Response, Request, NextFunction } from 'express';
import { UserRepository } from '../repository/UserRepository';

export class AuthController {

    authenticationService = async (req: Request, res: Response, next: NextFunction) => {
        if (req.headers['api-key'] === process.env.API_KEY ) {
            next();
        } else {
            res.status(401).json({ message: 'API Key Not Found' });
        }
    }

    noAuthenticationService = async (req: Request, res: Response, next: NextFunction) => {
        next();
    }

    rootPage = async (req: Request, res: Response) => {
        res.status(200).json({ message: 'Main API Call' });
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            next(error)
        }
    }
}