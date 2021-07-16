import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentService extends TypeOrmCrudService<Appointment> {
	constructor(@InjectRepository(Appointment) repo) {
		super(repo);
	}
}
