import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupDto } from 'src/auth/dtos/signup.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(signupDto: SignupDto): Promise<User> {
    signupDto.password = await bcrypt.hash(
      signupDto.password,
      +process.env.SALT_ROUND,
    );
    const newUser = await this.userModel.create(signupDto);
    return newUser;
  }

  async findUser(filterOption): Promise<User[]> {
    return await this.userModel.find(filterOption);
  }
}
