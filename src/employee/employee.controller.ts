import { Controller, Get, Post, Body } from '@nestjs/common'
import { EmployeeService } from './employee.service'
import { CreateEmployeeDto } from './create-employee.dto'

@Controller('employee')
export class EmployeeController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	findAll() {
		return this.employeeService.findAll()
	}

	@Post()
	create(@Body() createEmployeeDto: CreateEmployeeDto) {
		return this.employeeService.create(createEmployeeDto)
	}
}
