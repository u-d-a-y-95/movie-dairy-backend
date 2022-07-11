import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dtos/signin.dto';
import { SignupDto } from './dtos/signup.dto';
import { User } from './schemas/user.schema';

@Controller('')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  signup(@Body() signupDto: SignupDto): Promise<User> {
    return this.authService.signup(signupDto);
  }

  // @Post('signin')
  // signin(@Body() signinDto: SigninDto){

  // }

  @Get()
  getAllUser(): Promise<User[]> {
    return this.authService.getAll();
  }
}
