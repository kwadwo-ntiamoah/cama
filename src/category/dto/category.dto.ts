import { IsString, IsNotEmpty } from "class-validator";

export class CategoryDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string
}