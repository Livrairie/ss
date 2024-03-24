import { Test, TestingModule } from '@nestjs/testing';
import { MyBooksService } from './my-books.service';

describe('MyBooksService', () => {
  let service: MyBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyBooksService],
    }).compile();

    service = module.get<MyBooksService>(MyBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
