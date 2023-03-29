import { Decimal } from "@prisma/client/runtime";
import { IsString, IsNotEmpty, IsDecimal, IsNumberString, IsBoolean, IsNumber, IsArray } from "class-validator";

// title String
//   description String
//   price Decimal @default(1.00)
//   in_stock Boolean @default(true)

//   categoryId Int
//   category Category @relation(fields: [categoryId], references: [id])

//   images Image[]
//   care_guide_infos CareGuide[]
//   orders Order[]

export class ProductDto {
    @IsNumber()
    @IsNotEmpty()
    categoryId: number

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsDecimal()
    @IsNotEmpty()
    price: number

    @IsArray()
    images: string[]

    @IsArray()
    care_guide_infos: number[]
    
}