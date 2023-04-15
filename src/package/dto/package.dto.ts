import { IsArray, IsDecimal, IsNotEmpty, IsString } from "class-validator";

export class PackageDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsDecimal()
    @IsNotEmpty()
    price: number

    @IsArray()
    @IsNotEmpty()
    benefits: BenefitDto[]
}

export class BenefitDto {
    @IsString()
    @IsNotEmpty()
    description: string
}