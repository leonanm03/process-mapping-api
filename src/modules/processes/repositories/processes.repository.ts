import { Prisma, Process } from '@prisma/client';

export abstract class ProcessesRepository {
    abstract create(process: Prisma.ProcessCreateInput): Promise<Process>;
    abstract findAll(): Promise<Process[]>;
    abstract getProcessesWithChildren(processId?: number): Promise<Process[]>;
}
