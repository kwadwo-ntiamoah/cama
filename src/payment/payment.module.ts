import { Module } from "@nestjs/common/decorators";
import PaymentController from "./payment.controller";
import PaymentService from "./payment.service";

@Module({
    providers: [PaymentService],
    controllers: [PaymentController],
    exports: [PaymentService]
})
export default class PaymentModule {}