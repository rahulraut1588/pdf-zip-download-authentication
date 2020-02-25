import mongoose from 'mongoose';

export default class UserSchema {
    public Schema = mongoose.Schema;
    
    public users = this.Schema({
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        password: String,

    }, { collection: 'users' });

    public Users = mongoose.model('Users', this.users, 'users');
}