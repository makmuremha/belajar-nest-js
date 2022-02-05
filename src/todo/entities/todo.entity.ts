import { ApiProperty } from "@nestjs/swagger";
import {
    AutoIncrement,
    Column,
    PrimaryKey,
    DataType,
    Table,
    Model
} from "sequelize-typescript";

@Table({ tableName: 'todos', timestamps: false })
export class Todo extends Model {
    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ApiProperty()
    @Column({ type: DataType.STRING(100), allowNull: false })
    description: string;

    @ApiProperty()
    @Column({ type: DataType.ENUM, values: ['active', 'completed'] })
    flag: string;
}
