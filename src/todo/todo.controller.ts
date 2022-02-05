import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @ApiCreatedResponse({ type: Todo, description: "The created todo response" })
  @Post()
  create(@Body() createTodo: CreateTodoDto) {
    return this.todoService.create(createTodo);
    return 
  }

  @ApiOkResponse({ type: Todo, description: "Response All Todo", isArray:true })
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @ApiOkResponse({ type: Todo, description: "Response One Todo" })
  @ApiNotFoundResponse({description:"Todo not found"})
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todoService.remove(id);
  }
}
