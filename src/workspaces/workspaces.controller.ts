import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACE')
@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {
    return;
  }

  @Post()
  createWorkspace() {
    return;
  }

  @Get(':url/members')
  getMembers() {
    return;
  }

  @Post(':url/members')
  inviteMembers() {
    return;
  }

  @Delete(':url/members/:id')
  kickMembers() {
    return;
  }

  @Get(':url/members/:id')
  getMember() {
    return;
  }

  @Get(':url/users/:id')
  DEPRECATED_getMember() {
    this.getMember();
  }
}
