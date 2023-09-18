import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';

@Controller('areas')
export class AreasController {
    constructor(private readonly areasService: AreasService) {}

    @Post()
    create(@Body() createAreaDto: CreateAreaDto) {
        return this.areasService.create(createAreaDto);
    }

    @Get()
    findAll() {
        return this.areasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.areasService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.areasService.remove(+id);
    }
}
