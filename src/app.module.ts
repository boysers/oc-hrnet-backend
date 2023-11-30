import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeModule } from './employee/employee.module'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database.sqlite',
			autoLoadEntities: true,
			synchronize: true,
		}),
		EmployeeModule,
	],
})
export class AppModule {}
