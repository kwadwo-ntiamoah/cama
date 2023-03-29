import { Module } from "@nestjs/common";
import ProgrammeController from "./programme.controller";
import ProgrammeService from "./programme.service";

@Module({
    providers: [ProgrammeService],
    controllers: [ProgrammeController]
})
export default class ProgrammeModule {}