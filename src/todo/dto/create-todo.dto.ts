import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
    @ApiProperty()
    description: string;

    @ApiProperty()
    flag: string;
}
