import { Body, Controller, Get, Post, Res, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { UserDto } from 'src/common/dto';
import { SignUpDto } from './dto';
import { User } from 'src/common/decorator';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '내 정보 조회' })
  @ApiResponse({ type: UserDto })
  @Get()
  getUser(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  signUp(@Body() body: SignUpDto) {
    this.usersService.signUp(body.email, body.nickname, body.password);
  }

  @ApiOperation({ summary: '로그인' })
  @ApiResponse({ type: UserDto })
  @Post('login')
  signIn(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  signOut(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
  }
}
