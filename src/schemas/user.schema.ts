import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Schema({ timestamps: true })
export class User {
  @ApiProperty({ required: true, description: '유저 아이디' })
  @IsString()
  @IsNotEmpty()
  @Prop({ unique: true })
  id: Types.ObjectId;

  @ApiProperty({ required: true, description: '이메일' })
  @IsEmail()
  @IsNotEmpty()
  @Prop({ required: true, unique: true, length: 30 })
  email: string;

  @ApiProperty({ required: true, description: '닉네임' })
  @IsString()
  @IsNotEmpty()
  @Prop({ required: true, unique: true, length: 10 })
  nickname: string;

  @ApiProperty({ required: true, description: '비밀번호' })
  @IsString()
  @IsNotEmpty()
  @Prop({ length: 16, select: false })
  password: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
