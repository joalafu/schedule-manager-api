import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
@ApiTags('Appointments')
@Controller('appointment')
export class AppointmentController implements CrudController<Appointment> {
  constructor(public service: AppointmentService) {}
}
