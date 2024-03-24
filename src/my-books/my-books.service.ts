import { Injectable } from '@nestjs/common';
import { CreateMyBookDto } from './dto/create-my-book.dto';
import { UpdateMyBookDto } from './dto/update-my-book.dto';
import { MyBook } from './schemas/my-book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MyBooksService {
  constructor(@InjectModel(MyBook.name) private myBookModel: Model<MyBook>) { }

  create(createMyBookDto: CreateMyBookDto, username: string) {
    const createdMyBook = new this.myBookModel({ ...createMyBookDto, username });
    return createdMyBook.save();
  }

  findAll(username: string) {
    return this.myBookModel.find({username}).exec();
  }

  findOne(id: string, username: string) {
    return this.myBookModel.findOne({_id: id, username}).exec();
  }

  update(id: string, updateMyBookDto: UpdateMyBookDto, username: string) {
    return this.myBookModel.findOneAndUpdate({_id: id, username}, {...updateMyBookDto, username}).exec();
  }

  remove(id: string, username: string) {
    return this.myBookModel.findOneAndDelete({_id: id, username}).exec();
  }
}
