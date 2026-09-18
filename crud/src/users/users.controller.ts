import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { SignUpDto } from './dto/signup.dto.js';
import { SignInDto } from './dto/signin.dto.js';
import { AuthGuard } from './guards/auth.guard.js';
import { CurrentUser } from './decorators/current-user.decorator.js';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.usersService.signUp(signUpDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.usersService.signIn(signInDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@CurrentUser() user: any) {
    return { message: 'ეს არის დაცული ენდპოინტი', user };
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}