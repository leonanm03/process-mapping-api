import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ProcessIdParamDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
