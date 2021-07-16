import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user/entities/user.repository';
import { User } from './user/entities/user.entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({ entities: [User] }),
		TypeOrmModule.forFeature([UserRepository]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
