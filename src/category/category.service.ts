import { Injectable } from "@nestjs/common";
import { Category } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CategoryDto } from "./dto";

@Injectable()
export default class CategoryService {
    constructor(private prisma: PrismaService) {}

    async getCategories(): Promise<Category[]> {

        return await this.prisma.category.findMany({
            include: { products: { include: { images: true } } }
        })
    }

    async createCategory(dto: CategoryDto): Promise<Category> {
        return await this.prisma.category.create({
            data: { ...dto }
        })
    }

    async updateCategory(id: number, dto: CategoryDto): Promise<Category> {
        return await this.prisma.category.update({
            where: { id },
            data: { ...dto }
        })
    }

    async deleteCategory(id: number): Promise<Category> {
        return await this.prisma.category.delete({ where: { id } })
    }
}