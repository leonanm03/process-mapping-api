import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { AreasRepository } from './repositories/areas.repository';

@Injectable()
export class AreasService {
    constructor(private readonly areasRepository: AreasRepository) {}
    async create({ name }: CreateAreaDto) {
        const areaAlreadyExists = await this.areasRepository.findByName(name);
        if (areaAlreadyExists) {
            throw new HttpException(
                'This area already exists',
                HttpStatus.CONFLICT,
            );
        }

        const area = await this.areasRepository.create(name);
        return { id: area.id, name: area.name };
    }

    async findAll() {
        return this.areasRepository.findAll();
    }
}
