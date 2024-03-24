import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyBooksService } from './my-books.service';
import { CreateMyBookDto } from './dto/create-my-book.dto';
import { UpdateMyBookDto } from './dto/update-my-book.dto';

@Controller('my-books')
export class MyBooksController {
  constructor(private readonly myBooksService: MyBooksService) {}

  @Post()
  create(@Body() createMyBookDto: CreateMyBookDto) {
    return this.myBooksService.create(createMyBookDto);
  }

  @Get()
  findAll() {
    return this.myBooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myBooksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyBookDto: UpdateMyBookDto) {
    return this.myBooksService.update(id, updateMyBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myBooksService.remove(id);
  }
}
