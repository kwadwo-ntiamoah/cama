import { IsDecimal, IsNotEmpty, IsString } from "class-validator";

export class PaymentDto {
    @IsDecimal()
    @IsNotEmpty()
    totalAmount: number

    @IsString()
    @IsNotEmpty()
    description: string
}