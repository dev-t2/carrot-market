import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { PostChatDto } from './dto';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({ name: 'url', required: true, description: '워크스페이스 주소' })
  @ApiParam({ name: 'id', required: true, description: '사용자 아이디' })
  @ApiQuery({ name: 'perPage', required: true, description: '페이지 개수' })
  @ApiQuery({ name: 'page', required: true, description: '해당 페이지' })
  @Get(':id/chats')
  getChat(@Param() param, @Query() query) {
    console.log({ param, query });
  }

  @Post(':id/chats')
  postChat(@Body() body: PostChatDto) {
    console.log(body);
  }
}
