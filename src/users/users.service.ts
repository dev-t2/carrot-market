import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { SignUpDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  signUp(body: SignUpDto) {
    console.log(body);
  }
}
