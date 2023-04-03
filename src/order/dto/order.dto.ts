import { IsArray, IsBtcAddress, IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsOptional, isString, IsString } from "class-validator";

export class OrderDto {
    @IsString()
    @IsNotEmpty()
    firstname: string

    @IsString()
    @IsNotEmpty()
    lastname: string

    @IsNumberString()
    @IsNotEmpty()
    phone: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    country: string

    @IsString()
    @IsNotEmpty()
    region: string

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsOptional()
    additional_info?: string

    @IsNumber()
    @IsNotEmpty()
    quantity: number

    @IsArray()
    @IsNotEmpty()
    cartItems: CartItemDto[]
}

export class CartItemDto {
    @IsNumber()
    product: number

    @IsNumber()
    @IsNotEmpty()
    quantity: number

}