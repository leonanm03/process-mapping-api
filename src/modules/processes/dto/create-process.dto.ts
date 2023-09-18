import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProcessDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    areaId?: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    fatherProcessId?: string;
}
