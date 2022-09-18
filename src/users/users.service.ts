import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

import { UsersRepository } from './users.repository';
import { SignUpDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp({ email, nickname, password }: SignUpDto) {
    const isExistsEmail = await this.usersRepository.existsEmail(email);

    if (isExistsEmail) {
      // 이미 존재하는 이메일 에러

      return;
    }

    const isExistsNickname = await this.usersRepository.existsNickname(nickname);

    if (isExistsNickname) {
      // 이미 존재하는 닉네임 에러

      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.usersRepository.signUp({ email, nickname, password: hashedPassword });
  }
}
