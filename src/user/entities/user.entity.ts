import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty({ example: 'Usuario' })
	name: string;

	@Column()
	@ApiProperty({ example: 'De Prueba' })
	lastname: string;

	@Column()
	@ApiProperty({ example: 'email@gmail.com' })
	email: string;

	@Column()
	@ApiProperty({ example: '47994252' })
	dni: string;

	@Column()
	@ApiProperty({ example: '123456' })
	password: string;
}
