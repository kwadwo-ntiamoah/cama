import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class ProgrammeDto {
    @IsNumber()
    @IsNotEmpty()
    dayId: number

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    time: string
}