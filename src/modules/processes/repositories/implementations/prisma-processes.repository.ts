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

    async findById(id: string) {
        return this.prisma.process.findUnique({
            where: { id },
        });
    }

    async getProcessesWithChildren(processId = null) {
        const processes = await this.prisma.process.findMany({
            where: {
                fatherProcessId: processId,
            },
            include: {
                area: { select: { name: true } },
                subProcess: {
                    include: {
                        subProcess: {},
                    },
                },
            },
        });

        const result = [];
        for (const process of processes) {
            const children = await this.getProcessesWithChildren(process.id);
            result.push({
                ...process,
                subProcess: children,
            });
        }

        return result;
    }

    async remove(id: string) {
        return this.prisma.process.delete({ where: { id } });
    }
}
