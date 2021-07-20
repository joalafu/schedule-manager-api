import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Appointment } from './entities/appointment.entity';
import { AppointmentRepository } from './entities/appointment.repository';

@Injectable()
export class AppointmentService extends TypeOrmCrudService<Appointment> {
  private readonly logger = new Logger(AppointmentService.name);
  constructor(private readonly appointmentRepository: AppointmentRepository) {
    super(appointmentRepository);
  }
}
