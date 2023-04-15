import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CategoryModule from './category/category.module';
import OrderModule from './order/order.module';
import PaymentModule from './payment/payment.module';
import { PrismaModule } from './prisma/prisma.module';
import ProductModule from './product/product.module';
import ProgrammeModule from './programme/programme.module';
import PackageModule from './package/package.module';
import RequestModule from './request/request.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    ProgrammeModule,
    PaymentModule,
    PackageModule,
    RequestModule
  ]
})
export class AppModule {}
