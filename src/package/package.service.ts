import { Injectable } from "@nestjs/common";
import { Benefit, Package } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { BenefitDto, PackageDto } from "./dto/package.dto";

@Injectable()
export default class PackageService {
    constructor(private prisma: PrismaService) {}
    
    async getPackages(): Promise<Package[]> {
        return await this.prisma.package.findMany({
            include: { benefits: true }
        })
    }

    async addPackage(dto: PackageDto) {
        return this.prisma.$transaction(async (tx) => {
            const pkg = await this.prisma.package.create({
                include: { benefits: true },
                data: { title: dto.title, price: dto.price }
            })

            for (let index in dto.benefits) {
                const benefit: BenefitDto = dto.benefits[index]

                await this.prisma.benefit.create({
                    data: { description: benefit.description, packageId: pkg.id }
                })
            }

            return pkg
        }, { timeout: 60000 })
    }
}