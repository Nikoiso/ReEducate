import { Injectable, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema.js';
import { SignUpDto } from './dto/signup.dto.js';
import { SignInDto } from './dto/signin.dto.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signUp(signUpDto: SignUpDto): Promise<User> {
    const { email, password, name, age } = signUpDto;
    
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('ეს ემაილი უკვე დაკავებულია');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
      age,
    });

    return newUser.save();
  }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('არასწორი ემაილი ან პაროლი');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('არასწორი ემაილი ან პაროლი');
    }

    return { 
      message: 'წარმატებით გაიარეთ ავტორიზაცია', 
      userId: user._id, 
      email: user.email 
    };
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException(`მომხმარებელი ვერ მოიძებნა`);
    return user;
  }
}