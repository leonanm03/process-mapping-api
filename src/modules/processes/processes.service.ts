import { Injectable } from '@nestjs/common';
import { CreateProcessDto } from './dto/create-process.dto';
import { ProcessesRepository } from './repositories/processes.repository';

@Injectable()
export class ProcessesService {
    constructor(private readonly ProcessesRepository: ProcessesRepository) {}
    async create(createProcessDto: CreateProcessDto) {
        const process = await this.ProcessesRepository.create(createProcessDto);
        return process;
    }

    async findAllWithChildren () {
        const processes =
            await this.ProcessesRepository.getProcessesWithChildren();
        return processes;
    }
}
