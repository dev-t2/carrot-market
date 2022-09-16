import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @IsEmail()
  @IsNotEmpty()
  @Prop({ required: true, unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Prop({ required: true, unique: true, length: 10 })
  nickname: number;

  @IsString()
  @IsNotEmpty()
  @Prop({ length: 16, select: false })
  password: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
