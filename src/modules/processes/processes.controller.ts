import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { CreateProcessDto } from './dto/create-process.dto';
import { RemoveProcessDto } from './dto/remove-process.dto';

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

    @Delete(':id')
    remove(@Param() params: RemoveProcessDto) {
        return this.processesService.remove(params);
    }
}
