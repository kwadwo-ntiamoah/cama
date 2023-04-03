import { Injectable } from "@nestjs/common";
import { Product } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductDto } from "./dto";

@Injectable()
export default class ProductService {
    constructor(private prisma: PrismaService) {}

    async createProduct(dto: ProductDto): Promise<Product> {
        const response = await this.prisma.$transaction(async (tx) => {
            
            const product = await this.prisma.product.create({
                data: { title: dto.title, description: dto.description, categoryId: dto.categoryId, price: dto.price }
            })

            dto.images.forEach(async (url) => {
                await this.prisma.image.create({
                    data: { 
                        url, 
                        productId: product.id, 
                        title: product.title + "_image"
                     }
                })
            })

            return product
        })

        return response
    }

    async getProducts(): Promise<Product[]> {
        return await this.prisma.product.findMany({
            include: { category: true, images: true }
        });
    }

    async getProduct(id: string): Promise<Product> {
        return this.prisma.product.findUnique({
            where: { id: parseInt(id) },
            include: {
                category: true,
                images: true
            }
        });
    }
}