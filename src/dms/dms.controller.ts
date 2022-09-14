import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { PostChatDto } from './dto';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Param() param, @Query() query) {
    console.log({ param, query });
  }

  @Post(':id/chats')
  postChat(@Body() body: PostChatDto) {
    console.log(body);
  }
}
