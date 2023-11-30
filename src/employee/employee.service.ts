import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Employee } from './employee.entity'

@Injectable()
export class EmployeeService {
	constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

	findAll() {
		return this.employeeRepository.find()
	}

	create({
		firstName,
		lastName,
		dateOfBirth,
		startDate,
		department,
		street,
		city,
		state,
		zipCode,
	}: {
		firstName: string
		lastName: string
		dateOfBirth: string
		startDate: string
		department: string
		street: string
		city: string
		state: string
		zipCode: string
	}) {
		const employee = new Employee()
		employee.firstName = firstName
		employee.lastName = lastName
		employee.dateOfBirth = dateOfBirth
		employee.startDate = startDate
		employee.department = department
		employee.street = street
		employee.city = city
		employee.state = state
		employee.zipCode = zipCode
		return this.employeeRepository.save(employee)
	}
}
