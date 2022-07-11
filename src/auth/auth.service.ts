import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupDto } from './dtos/signup.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(signupDto: SignupDto): Promise<User> {
    signupDto.password = await bcrypt.hash(
      signupDto.password,
      +process.env.SALT_ROUND,
    );
    const newUser = await this.userModel.create(signupDto);
    return newUser;
  }
  async getAll(): Promise<User[]> {
    return await this.userModel.find({}).select({ password: 0 });
  }
}
