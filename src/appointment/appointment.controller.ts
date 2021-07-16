import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AppointmentService } from './appointment.service';
import { Appointment } from './entities/appointment.entity';

@Crud({
	model: {
		type: Appointment,
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
@Controller('appointment')
export class AppointmentController implements CrudController<Appointment> {
	constructor(public service: AppointmentService) {}
}
