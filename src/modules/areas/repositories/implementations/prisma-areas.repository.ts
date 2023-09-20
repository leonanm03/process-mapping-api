import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AreasRepository } from '../areas.repository';

@Injectable()
export class PrismaAreasRepository implements AreasRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(name: string) {
        return this.prisma.area.create({
            data: { name },
        });
    }

    async findByName(name: string) {
        return this.prisma.area.findUnique({
            where: { name },
        });
    }

    async findAll() {
        return this.prisma.area.findMany();
    }

    async findById(id: number) {
        return this.prisma.area.findUnique({
            where: { id },
        });
    }
}
