import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class RemoveProcessDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
