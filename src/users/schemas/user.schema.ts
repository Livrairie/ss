import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({unique: true})
    username: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);