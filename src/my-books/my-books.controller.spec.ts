import { Test, TestingModule } from '@nestjs/testing';
import { MyBooksController } from './my-books.controller';
import { MyBooksService } from './my-books.service';

describe('MyBooksController', () => {
  let controller: MyBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyBooksController],
      providers: [MyBooksService],
    }).compile();

    controller = module.get<MyBooksController>(MyBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
