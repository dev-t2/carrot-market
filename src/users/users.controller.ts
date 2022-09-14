import { Body, Controller, Get, Post, Res, Req } from '@nestjs/common';

import { UsersService } from './users.service';
import { PostUsersDto } from './dto';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return;
  }

  @Post()
  postUsers(@Body() body: PostUsersDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
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
