import { Body, Controller, Post } from "@nestjs/common";
import { OrderDto } from "./dto";
import OrderService from "./order.service";

@Controller("orders")
export default class OrderController {
    constructor(private orderService: OrderService) {}

    @Post("")
    async createOrder(@Body() payload: OrderDto) {
        return this.orderService.placeOrder(payload)
    }
}