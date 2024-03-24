import { Module } from '@nestjs/common';
import { MyBooksService } from './my-books.service';
import { MyBooksController } from './my-books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MyBook, MyBookSchema } from './schemas/my-book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: MyBook.name, schema: MyBookSchema}])
  ],
  controllers: [MyBooksController],
  providers: [MyBooksService],
})
export class MyBooksModule {}
