import { Body, Controller, Post, Get, Query } from "@nestjs/common";
import RequestService from "./request.service";
import { RequestDto } from "./dto/request.dto";
import { RequestType } from "@prisma/client";

@Controller("requests")
export default class RequestController {
    constructor(private requestService: RequestService) {}

    @Post("")
    async createRequest(@Body() payload: RequestDto) {
        return this.requestService.createRequest(payload)
    }

    @Get("")
    async getRequests(@Query('requestType') requestType?: RequestType) {
        return this.requestService.getRequests(requestType)
    }
}