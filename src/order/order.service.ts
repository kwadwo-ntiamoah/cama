import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { OrderDto } from "./dto";

@Injectable()
export default class OrderService {
    constructor(private prisma: PrismaService) {}

    async placeOrder(dto: OrderDto) {
        return await this.prisma.order.create({
            data: { ...dto }
        })
    }
}