import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
	constructor(private readonly userRepository: UserRepository) {
		super(userRepository);
	}
}
