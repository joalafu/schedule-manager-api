import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  startDate: Date;

  @ApiProperty()
  @Column()
  endDate: Date;

  @ApiProperty()
  @Column()
  going: boolean;
}
