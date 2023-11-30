import { Controller, Get, Post, Body } from '@nestjs/common'
import { EmployeeService } from './employee.service'

@Controller('employee')
export class EmployeeController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	findAll() {
		return this.employeeService.findAll()
	}

	@Post()
	create(
		@Body('employee')
		employee: {
			firstName: string
			lastName: string
			dateOfBirth: string
			startDate: string
			department: string
			street: string
			city: string
			state: string
			zipCode: string
		},
	) {
		return this.employeeService.create(employee)
	}
}
