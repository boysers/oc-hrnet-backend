import { Controller, Get, Post, Body, Delete, Param, HttpCode } from '@nestjs/common'
import { EmployeeService } from './employee.service'
import { CreateEmployeeDto } from './create-employee.dto'
import {
	ApiCreatedResponse,
	ApiExtraModels,
	ApiOkResponse,
	ApiOperation,
	ApiParam,
	ApiTags,
} from '@nestjs/swagger'
import { Employee } from './employee.entity'

@Controller('employees')
@ApiTags('Employees')
@ApiExtraModels(Employee)
export class EmployeeController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	@ApiOkResponse({
		description: 'The employee records',
		type: Employee,
		isArray: true,
	})
	findAll() {
		return this.employeeService.findAll()
	}

	@Post()
	@ApiOperation({ summary: 'Create a new employee' })
	@ApiCreatedResponse({
		description: 'The employee has been successfully created',
		type: Employee,
	})
	@HttpCode(201)
	create(@Body() createEmployeeDto: CreateEmployeeDto) {
		return this.employeeService.create(createEmployeeDto)
	}

	@Delete(':id(\\d+)')
	@ApiOperation({ summary: 'Delete an employee by ID' })
	@ApiParam({ name: 'id', description: 'ID of the employee to delete', example: 1 })
	delete(@Param('id') id: string) {
		return this.employeeService.delete(parseInt(id, 10))
	}
}
