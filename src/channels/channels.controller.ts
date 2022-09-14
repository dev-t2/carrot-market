import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { PostChatDto } from './dto';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getChaanels() {
    return;
  }

  @Post()
  createChannel() {
    return;
  }

  @Get(':name')
  getChaanel() {
    return;
  }

  @Get(':name/chats')
  getChats(@Param() param, @Query() query) {
    console.log({ param, query });
  }

  @Post(':name/chats')
  postChat(@Body() body: PostChatDto) {
    console.log(body);
  }

  @Get(':name/members')
  getMembers() {
    return;
  }

  @Post(':name/members')
  inviteMembers() {
    return;
  }
}
