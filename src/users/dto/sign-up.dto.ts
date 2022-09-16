import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
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

  @ApiProperty({
    required: true,
    description: '비밀번호',
    example: '[비밀번호 입력]',
  })
  password: string;
}
