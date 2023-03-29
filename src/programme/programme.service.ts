import { Injectable } from "@nestjs/common";
import { Day, Programme } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { ProgrammeDto } from "./dto";

@Injectable()
export default class ProgrammeService {
    constructor(private prisma: PrismaService) {}

    async getDays(): Promise<Day[]> {
        return this.prisma.day.findMany({
            include: { programmes: true }
        })
    }

    async createProgramme(dto: ProgrammeDto): Promise<Programme> {
        return this.prisma.programme.create({
            data: { ...dto }
        })
    }

    async createDay(day: string): Promise<Day> {
        return this.prisma.day.create({
            data: { title: day }
        })
    }
}