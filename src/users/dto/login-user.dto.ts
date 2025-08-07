import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";




export class LoginUserDto {

    @IsEmail()
    @IsNotEmpty()
    @IsString()

    email: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(10)

    password: string;
}