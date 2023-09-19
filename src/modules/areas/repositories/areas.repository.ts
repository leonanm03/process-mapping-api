import { Area } from '@prisma/client';

export abstract class AreasRepository {
    abstract create(name: string): Promise<Area>;
    abstract findByName(name: string): Promise<Area | null>;
    abstract findAll(): Promise<Area[]>;
    abstract findById(id: number): Promise<Area | null>;
}
