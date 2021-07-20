import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ApiProperty({ example: 'Usuario' })
	@Column()
	name: string;

	@ApiProperty({ example: 'De Prueba' })
	@Column()
	lastname: string;

	@ApiProperty({ example: 'email@gmail.com' })
	@Column()
	email: string;

	@ApiProperty({ example: '47994252' })
	@Column()
	dni: string;

	@ApiProperty({ example: '123456' })
	@Column()
	password: string;
}
