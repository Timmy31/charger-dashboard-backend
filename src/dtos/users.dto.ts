import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  public company: string;

  @IsString()
  public position: string;

  @IsString()
  public role: string;

  @IsString()
  public password: string;
}
