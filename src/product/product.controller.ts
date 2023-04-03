import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { ProductDto } from "./dto";
import ProductService from "./product.service";

@Controller("products")
export default class ProductController {
    constructor(private productService: ProductService) {}
    
    @Post("")
    async createProduct(@Body() payload: ProductDto) {
        return await this.productService.createProduct(payload)
    }

    @Get("")
    async getProducts() {
        return this.productService.getProducts()
    }

    @Get(":id")
    async getProduct(@Param("id") id: string) {
        return await this.productService.getProduct(id);
    }
}