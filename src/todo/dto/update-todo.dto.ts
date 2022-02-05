import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
    @ApiProperty()
    description: string;

    @ApiProperty()
    flag: string;
}
