import { Body, Controller, Get, Post, Res, Req } from '@nestjs/common';

import { UsersService } from './users.service';
import { PostUsersDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return;
  }

  @Post()
  postUsers(@Body() postUsersDto: PostUsersDto) {
    this.usersService.postUsers(postUsersDto.email, postUsersDto.nickname, postUsersDto.password);
  }

  @Post('login')
  login() {
    return;
  }

  @Post('logout')
  logout(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
  }
}
