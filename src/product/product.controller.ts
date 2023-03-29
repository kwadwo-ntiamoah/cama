import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { ProductDto } from "./dto";
import ProductService from "./product.service";

@Controller("products")
export default class ProductController {
    constructor(private productService: ProductService) {}
    
    @Post("")
    async createProduct(@Body() payload: ProductDto) {
        return await this.productService.createProduct(payload)
    }

    // @Post(":id")
    // async updateProduct(@Param("id") id: string) {
    //     return await this.productService.updateProduct()
    // }

    // @Delete(":id")
    // async deleteProduct(@Param("id") id: string) {
    //     return await this.productService.deleteProduct()
    // }
}