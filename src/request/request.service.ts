import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { RequestDto } from "./dto/request.dto";
import { RequestType } from "@prisma/client";

@Injectable()
export default class RequestService {
    constructor(private prisma: PrismaService) {}

    async createRequest(dto: RequestDto) {
        return await this.prisma.request.create({
            data: { ...dto, fulfilled: false }
        })
    }

    async getRequests(requestType?: RequestType) {
        return await this.prisma.request.findMany({
            where: { requestType }
        })
    }
}