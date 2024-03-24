import { PartialType } from '@nestjs/mapped-types';
import { CreateMyBookDto } from './create-my-book.dto';

export class UpdateMyBookDto extends PartialType(CreateMyBookDto) {}
