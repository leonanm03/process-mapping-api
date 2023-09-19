import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProcessDto } from './dto/create-process.dto';
import { ProcessesRepository } from './repositories/processes.repository';
import { AreasRepository } from '../areas/repositories/areas.repository';
import { RemoveProcessDto } from './dto/remove-process.dto';

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

        const { fatherProcessId } = createProcessDto;
        if (fatherProcessId) {
            const fatherProcess = await this.processesRepository.findById(
                fatherProcessId,
            );
            if (!fatherProcess) {
                throw new HttpException(
                    'Father process not found',
                    HttpStatus.NOT_FOUND,
                );
            }
        }

        const process = await this.processesRepository.create(createProcessDto);
        return process;
    }

    async findAllWithChildren() {
        const processes =
            await this.processesRepository.getProcessesWithChildren();
        return processes;
    }

    async remove({ id }: RemoveProcessDto) {
        const process = await this.processesRepository.findById(id);
        if (!process) {
            throw new HttpException('Process not found', HttpStatus.NOT_FOUND);
        }

        return this.processesRepository.remove(id);
    }
}
