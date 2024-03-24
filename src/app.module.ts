import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { MyBooksModule } from './my-books/my-books.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/livrairie'), 
    BooksModule, MyBooksModule, AuthModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
