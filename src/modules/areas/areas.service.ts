import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreasService {
    create(createAreaDto: CreateAreaDto) {
        return 'This action adds a new area';
    }

    findAll() {
        return `This action returns all areas`;
    }

    findOne(id: number) {
        return `This action returns a #${id} area`;
    }

    remove(id: number) {
        return `This action removes a #${id} area`;
    }
}
