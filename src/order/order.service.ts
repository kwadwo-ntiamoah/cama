import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { OrderDto } from "./dto";
import PaymentService from "src/payment/payment.service";
import { CartItemDto } from "./dto/order.dto";

@Injectable()
export default class OrderService {
    constructor(private prisma: PrismaService, private paymentService: PaymentService) {}

    async placeOrder(dto: OrderDto) {
        return await this.prisma.$transaction(async (tx) => {

            let price = []

            this.prisma.order.create({
                data: {...dto, fulfilled: false, paid: false, products: dto.cartItems.map(item => item.product)}
            })

            for (let index in dto.cartItems) {
                const item: CartItemDto = dto.cartItems[index]
                const prod = await this.prisma.product.findUnique({
                    where: { id: item.product }
                })

                price.push((parseInt(prod.price.toString()) * item["quantity"]))
            }

            const payload = {
                totalAmount: price.reduce((acc, curr) => acc + curr, 0) + 20, // 20 for delivery
                description: "Item Purchase"
            }

            return await this.paymentService.makePayment(payload)
        }, { timeout: 60000 })
    }
}