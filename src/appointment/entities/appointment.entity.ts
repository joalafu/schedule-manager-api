import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Appointment {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	startDate: Date;

	@Column()
	@ApiProperty()
	endDate: Date;

	@Column()
	@ApiProperty()
	going: boolean;
}
