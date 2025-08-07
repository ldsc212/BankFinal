import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  register(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  login(createUserDto: LoginUserDto) {
    return 'This action logs in a user';
  }

  findUserAuthenticated() {
    return `This action returns all users`;
  }

  private generateAccountNumber() {
    return '1234567890';
  }
}
