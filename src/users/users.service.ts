import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    findOne(username: string): Promise<User | undefined> {
        return this.userModel.findOne({ username });
    }

    create(username: string, password: string) {
        const createdUser = new this.userModel({username, password});
        return createdUser.save();
    }
}