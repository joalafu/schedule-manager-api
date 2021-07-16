import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	dotenv.config();
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle('Schedule Api Manager')
		.setDescription('Create Agenda with reminders for the users')
		.setVersion('1.0')
		.addTag('schedule')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
	await app.listen(3000, () => {
		const address = `http://localhost:3000/`;
		console.log(`Listening at ${address}`);
	});
}
bootstrap();
