import { IsString, Length, IsNumberString, IsDateString } from 'class-validator'

export class CreateEmployeeDto {
	@IsString()
	@Length(2, 30)
	firstName: string

	@IsString()
	@Length(2, 30)
	lastName: string

	@IsDateString()
	dateOfBirth: string

	@IsDateString()
	startDate: string

	@IsString()
	department: string

	@IsString()
	street: string

	@IsString()
	city: string

	@IsString()
	state: string

	@IsString()
	@Length(5, 5)
	@IsNumberString()
	zipCode: string
}
