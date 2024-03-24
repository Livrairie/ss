import { Injectable } from '@nestjs/common';
import { CreateMyBookDto } from './dto/create-my-book.dto';
import { UpdateMyBookDto } from './dto/update-my-book.dto';
import { MyBook } from './schemas/my-book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MyBooksService {
  constructor(@InjectModel(MyBook.name) private myBookModel: Model<MyBook>) {}

  create(createMyBookDto: CreateMyBookDto) {
    const createdMyBook = new this.myBookModel(createMyBookDto);
    return createdMyBook.save();
  }

  findAll() {
    return this.myBookModel.find().exec();
  }

  findOne(id: string) {
    return this.myBookModel.findById(id).exec();
  }

  update(id: string, updateMyBookDto: UpdateMyBookDto) {
    return this.myBookModel.findByIdAndUpdate(id, updateMyBookDto).exec();
  }

  remove(id: string) {
    return this.myBookModel.findByIdAndDelete(id).exec();
  }
}
