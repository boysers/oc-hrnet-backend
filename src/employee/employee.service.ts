import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Employee } from './employee.entity'
import { CreateEmployeeDto } from './create-employee.dto'

@Injectable()
export class EmployeeService {
	constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

	findAll() {
		return this.employeeRepository.find()
	}

	create(createEmployeeDto: CreateEmployeeDto) {
		const employee = new Employee(createEmployeeDto)
		return this.employeeRepository.save(employee)
	}
}
