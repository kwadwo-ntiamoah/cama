import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CategoryModule from './category/category.module';
import OrderModule from './order/order.module';
import { PrismaModule } from './prisma/prisma.module';
import ProductModule from './product/product.module';
import ProgrammeModule from './programme/programme.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    ProgrammeModule
  ]
})
export class AppModule {}
