import { Body, Controller, Get, Post } from "@nestjs/common";
import PackageService from "./package.service";
import { PackageDto } from "./dto/package.dto";

@Controller("packages")
export default class PackageController {
    constructor(private packageService: PackageService) {}

    
    @Get("")
    async getPackages() {
        return await this.packageService.getPackages()
    }
    
    @Post("")
    async addPackage(@Body() payload: PackageDto) {
        return await this.packageService.addPackage(payload)
    }
}