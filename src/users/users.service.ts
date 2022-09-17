import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { SignUpDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp({ email, nickname, password }: SignUpDto) {
    console.log(password);

    await this.usersRepository.existsEmail(email);
    await this.usersRepository.existsNickname(nickname);
  }
}
