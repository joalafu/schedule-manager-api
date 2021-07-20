import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
	private readonly logger = new Logger(UserService.name);
	constructor(private readonly userRepository: UserRepository) {
		super(userRepository);
	}
}
