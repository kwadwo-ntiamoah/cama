import { IsNotEmpty, IsString } from "class-validator";

export class DayDto {
    @IsString()
    @IsNotEmpty()
    title: string
}