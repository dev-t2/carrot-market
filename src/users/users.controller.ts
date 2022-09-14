import { Controller, Get, Post, Res, Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return;
  }

  @Post()
  postUsers() {
    return;
  }

  @Post('login')
  login() {
    return;
  }

  @Post('logout')
  logout(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });

    return;
  }
}
