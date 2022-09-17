import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async existsEmail(email: string) {
    const user = await this.userModel.exists({ email });

    console.log(user);

    return !!user;
  }

  async existsNickname(nickname: string) {
    const user = await this.userModel.exists({ nickname });

    console.log(user);

    return !!user;
  }
}
