import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length, IsNumberString, IsDateString } from 'class-validator'

export class CreateEmployeeDto {
	@IsString()
	@Length(2, 30)
	@ApiProperty({ example: 'John' })
	firstName: string

	@IsString()
	@Length(2, 30)
	@ApiProperty({ example: 'Smith' })
	lastName: string

	@IsDateString()
	@ApiProperty({ example: '1985-03-15' })
	dateOfBirth: string

	@IsDateString()
	@ApiProperty({ example: '2022-01-10' })
	startDate: string

	@IsString()
	@ApiProperty({ example: 'Sales' })
	department: string

	@IsString()
	@ApiProperty({ example: '123 Main Street' })
	street: string

	@IsString()
	@ApiProperty({ example: 'New York' })
	city: string

	@IsString()
	@ApiProperty({ example: 'New York' })
	state: string

	@IsString()
	@Length(5, 5)
	@IsNumberString()
	@ApiProperty({ example: '10001' })
	zipCode: string
}
