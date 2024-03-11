import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(user: any) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async update(id: string, user: any) {
    return this.userModel.findByIdAndUpdate(id, user);
  }
}
