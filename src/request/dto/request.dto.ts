import { RequestType } from "@prisma/client";
import { IsString, IsNotEmpty, IsNumberString, IsEmail, IsOptional } from "class-validator";


export class RequestDto {
    @IsString()
    @IsNotEmpty()
    fullname: string

    @IsString()
    @IsNotEmpty()
    country: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNumberString()
    @IsNotEmpty()
    phoneNumber: string

    @IsOptional()
    @IsString()
    requestType: RequestType

    @IsNotEmpty()
    @IsString()
    content: string
    
}