import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  firstName: string;
  lastName: number;
  @IsMobilePhone()
  @IsOptional()
  mobile: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
