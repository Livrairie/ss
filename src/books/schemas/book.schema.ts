import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    @Prop({length: 13, unique: true})
    isbn: string;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    year: number;

    @Prop()
    synopsis: string;

    @Prop()
    writer: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);