import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PaymentDto } from "./dto/payment.dto";
import axios from "axios"
import { ConfigService } from "@nestjs/config";

@Injectable()
export default class PaymentService {
    constructor(private config: ConfigService) { }

    async makePayment(dto: PaymentDto) {
        const data = JSON.stringify({
            "totalAmount": dto.totalAmount,
            "description": dto.description,
            "callbackUrl": this.config.get("CALLBACK_URL"),
            "returnUrl": this.config.get("RETURN_URL"),
            "merchantAccountNumber": this.config.get("MERCHANT_ACCOUNT_NUMBER"),
            "cancellationUrl": "http://hubtel.com/online",
            "clientReference": this._gen_random_ref()
        });

        const config = {
            method: 'post',
            url: 'https://payproxyapi.hubtel.com/items/initiate',
            headers: {
                'Authorization': 'Basic ' + this.config.get("API_KEY"),
                'Content-Type': 'application/json'
            },
            data: data
        };

        const res = await axios(config)
        return res.data
    }

    async processCallback(payload: any) {
        console.log("here")
        console.log(payload)
    }

    private _gen_random_ref = () => {
        return (Math.random() + 1).toString(36).substring(2)
    }
}