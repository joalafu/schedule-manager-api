import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Crud({
	model: {
		type: User,
	},
	routes: {
		only: [
			'getOneBase',
			'getManyBase',
			'createOneBase',
			'replaceOneBase',
			'updateOneBase',
		],
	},
})
@Controller('user')
export class UserController implements CrudController<User> {
	constructor(public service: UserService) {}
}
