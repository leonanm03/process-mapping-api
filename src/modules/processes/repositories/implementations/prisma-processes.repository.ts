import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessesRepository } from '../processes.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaProcessesRepository implements ProcessesRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(process: Prisma.ProcessCreateInput) {
        return this.prisma.process.create({ data: process });
    }

    async findAll() {
        return this.prisma.process.findMany();
    }
}
