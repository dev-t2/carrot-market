import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { SignUpDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  signUp({ email, nickname, password }: SignUpDto) {
    console.log({ email, nickname, password });
  }
}
