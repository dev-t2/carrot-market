import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  signUp(email: string, nickname: string, password: string) {
    console.log({ email, nickname, password });
  }
}
