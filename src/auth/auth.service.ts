import { Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto): Promise<User> {
    return this.userService.createUser(signupDto);
  }
  async validateUser(signinDto): Promise<User> {
    const { password, ...rest } = signinDto;
    const user = await this.userService.findUser(rest);
    if (!user[0]) {
      return null;
    }
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return null;
    }
    return user[0];
  }
  async signin(user: User) {
    console.log('test', user);
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        mobile: user.mobile,
      }),
    };
  }
}
