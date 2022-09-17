import { PickType } from '@nestjs/swagger';

import { User } from 'src/schemas/user.schema';

export class UserDto extends PickType(User, ['id', 'email', 'nickname'] as const) {}

export class SignUpDto extends PickType(User, ['email', 'nickname', 'password'] as const) {}
