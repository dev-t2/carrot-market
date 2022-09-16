import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    required: true,
    description: '아이디',
    example: 1,
  })
  id: number;

  @ApiProperty({
    required: true,
    description: '이메일',
    example: 'oo_ri@naver.com',
  })
  email: string;

  @ApiProperty({
    required: true,
    description: '닉네임',
    example: '티투',
  })
  nickname: string;
}
