import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProcessDto } from './dto/create-process.dto';
import { ProcessesRepository } from './repositories/processes.repository';
import { AreasRepository } from '../areas/repositories/areas.repository';

@Injectable()
export class ProcessesService {
    constructor(
        private readonly processesRepository: ProcessesRepository,
        private readonly areasRepository: AreasRepository,
    ) {}

    async create(createProcessDto: CreateProcessDto) {
        const area = await this.areasRepository.findById(
            createProcessDto.areaId,
        );
        if (!area) {
            throw new HttpException('Area not found', HttpStatus.NOT_FOUND);
        }

        const process = await this.processesRepository.create(createProcessDto);
        return process;
    }

    async findAllWithChildren() {
        const processes =
            await this.processesRepository.getProcessesWithChildren();
        return processes;
    }
}
