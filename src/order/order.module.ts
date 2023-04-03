import { Module } from "@nestjs/common";
import OrderController from "./order.controller";
import OrderService from "./order.service";
import PaymentService from "src/payment/payment.service";

@Module({
    providers: [OrderService, PaymentService],
    controllers: [OrderController],
    exports: [OrderService]
})
export default class OrderModule {}