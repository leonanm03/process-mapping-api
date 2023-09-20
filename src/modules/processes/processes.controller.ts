import {
    Controller,
    Get,
    Post,
    Body,
    Delete,
    Param,
    Patch,
} from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { CreateProcessDto } from './dto/create-process.dto';
import { ProcessIdParamDto } from './dto/process-id-param.dto';
import { UpdateProcessDto } from './dto/update-process.dto';

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
    remove(@Param() params: ProcessIdParamDto) {
        return this.processesService.remove(params);
    }

    @Patch(':id')
    update(
        @Param() params: ProcessIdParamDto,
        @Body() updateProcessDto: UpdateProcessDto,
    ) {
        return this.processesService.update(params, updateProcessDto);
    }
}
