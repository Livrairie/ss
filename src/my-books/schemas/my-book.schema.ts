import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Book } from "src/books/schemas/book.schema";

export type BookDocument = HydratedDocument<MyBook>;

@Schema()
export class MyBook {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Book'})
    book: Book;

    @Prop()
    rate: number;

    @Prop()
    username: string;
}

export const MyBookSchema = SchemaFactory.createForClass(MyBook);