import { IsString, IsEmail, IsNotEmpty, MinLength, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({ example: 'ნიკოლოზი', description: 'მომხმარებლის სახელი' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'მომხმარებლის ემაილი' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', description: 'პაროლი (მინიმუმ 6 სიმბოლო)' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 20, description: 'მომხმარებლის ასაკი' })
  @IsInt()
  @Min(0)
  age: number;
}