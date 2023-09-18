import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { CreateProcessDto } from './dto/create-process.dto';

@Controller('processes')
export class ProcessesController {
    constructor(private readonly processesService: ProcessesService) {}

    @Post()
    create(@Body() createProcessDto: CreateProcessDto) {
        return this.processesService.create(createProcessDto);
    }

    @Get()
    findAllWithChildren() {
        return this.processesService.findAllWithChildren();
    }
}
