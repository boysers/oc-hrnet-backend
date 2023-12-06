import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors({
		origin: ['http://localhost:5173'],
		methods: ['GET', 'POST'],
		credentials: true,
	})

	const config = new DocumentBuilder()
		.setTitle('Employees')
		.setDescription('The employee API')
		.setVersion('1.0')
		.addTag('employees')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	app.useGlobalPipes(new ValidationPipe())
	await app.listen(3000)
}
bootstrap()
