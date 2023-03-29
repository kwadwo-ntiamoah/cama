import { Controller, Get, Post } from "@nestjs/common";
import { Body, Delete, Param } from "@nestjs/common/decorators";
import CategoryService from "./category.service";
import { CategoryDto } from "./dto";

@Controller("categories")
export default class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get("")
    async getCategories() {
        return await this.categoryService.getCategories()
    }

    @Post("")
    async createCategory(@Body() payload: CategoryDto) {
        return await this.categoryService.createCategory(payload)
    }

    @Post(":id")
    async updateCategory(@Param("id") id: string, @Body() payload: CategoryDto) {
        return await this.categoryService.updateCategory(parseInt(id), payload);
    }

    @Delete(":id")
    async deleteCategory(@Param("id") id: string) {
        return await this.categoryService.deleteCategory(parseInt(id))
    }
}