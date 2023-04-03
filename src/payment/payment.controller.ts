import { Body, Controller, Post } from "@nestjs/common/decorators";
import { PaymentDto } from "./dto/payment.dto";
import PaymentService from "./payment.service";

@Controller("payment")
export default class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @Post("submit")
    async makePayment(@Body() payload: PaymentDto) {
        return await this.paymentService.makePayment(payload)
    }

    @Post("callback")
    async callbackUrl(@Body() payload: any) {
        return await this.paymentService.processCallback(payload)
    }
}