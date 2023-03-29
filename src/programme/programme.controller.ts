import { Controller, Post, Get, Body } from "@nestjs/common";
import { ProgrammeDto } from "./dto";
import ProgrammeService from "./programme.service";

@Controller("programmes")
export default class ProgrammeController {
    constructor(private programmeService: ProgrammeService) {}

    @Get("")
    async getProgrammes() {
        return await this.programmeService.getDays()
    }

    @Post("day")
    async createDay(@Body() payload: { day: string }) {
        return await this.programmeService.createDay(payload.day)
    }

    @Post("")
    async createProgramme(@Body() payload: ProgrammeDto) {
        return await this.programmeService.createProgramme(payload)
    }
}