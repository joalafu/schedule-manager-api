import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
	constructor(@InjectRepository(User) repo) {
		super(repo);
	}
}
