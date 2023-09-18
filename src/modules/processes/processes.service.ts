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

    findAll() {
        const processes = this.ProcessesRepository.findAll();
        return processes;
    }
}
