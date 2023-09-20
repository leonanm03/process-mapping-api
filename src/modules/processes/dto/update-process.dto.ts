import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

export class UpdateProcessDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    areaId?: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string;

    @IsString()
    @IsUUID()
    @IsNotEmpty()
    @IsOptional()
    fatherProcessId?: string;
}
