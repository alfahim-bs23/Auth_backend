import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';

/**
 * 
 * It’s just a TypeScript class or interface that defines the shape of the data you're expecting to receive — usually from the client (frontend).
 */
export class RegisterDto{
    @IsString()
    @IsNotEmpty()
    username:string

    @IsEmail()
    email:string;

    @IsString()
    @MinLength(6)
    password:string;
}