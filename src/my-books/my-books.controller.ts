import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { MyBooksService } from './my-books.service';
import { CreateMyBookDto } from './dto/create-my-book.dto';
import { UpdateMyBookDto } from './dto/update-my-book.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('my-books')
@UseGuards(AuthGuard)
export class MyBooksController {
  constructor(private readonly myBooksService: MyBooksService) { }

  @Post()
  create(@Body() createMyBookDto: CreateMyBookDto, @Request() req) {
    return this.myBooksService.create(createMyBookDto, req.user.username);
  }

  @Get()
  findAll(@Request() req) {
    return this.myBooksService.findAll(req.user.username);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.myBooksService.findOne(id, req.user.username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyBookDto: UpdateMyBookDto, @Request() req) {
    return this.myBooksService.update(id, updateMyBookDto, req.user.username);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.myBooksService.remove(id, req.user.username);
  }
}
