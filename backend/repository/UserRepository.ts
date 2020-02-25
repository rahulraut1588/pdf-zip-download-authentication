import UserSchema from "../Schema/UserSchema";
import md5 from 'md5';

export class UserRepository {
    
    public userSchema: UserSchema = new UserSchema();
    
    getUsers = async () => {
        const userList = await this.userSchema.Users.find().then( (users) => {
            return users;
        });
        return userList;
    }

    getUser = async (userId) => {
        const user = await this.userSchema.Users.findOne({_id: userId}).then( (users) => {
            return users;
        }); 
        return user;
    }

    getUserByEmail = async (payload) => {
        const user = await this.userSchema.Users.findOne(
                { email: payload.email }
            ).then( (users) => {
            return users;
        }); 
        return user;
    }

    loginUser = async (payload) => {
        const md5Password = md5(payload.password);
        const user = await this.userSchema.Users.findOne(
                { email: payload.email, password: md5Password }
            ).then( (users) => {
            return users;
        }); 
        return user;
    }

    register = async (payload) => {
        const md5Password = md5(payload.password);
        const userData = this.userSchema.Users({
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: md5Password
        });
        console.log(userData);
        const user = await userData.save( (err, userInfo) => {
            return userInfo;
        })
        return user;
    }

}