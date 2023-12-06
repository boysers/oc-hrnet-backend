import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Employee {
	@PrimaryGeneratedColumn()
	@ApiProperty({ example: 1 })
	id: number

	@Column()
	@ApiProperty({ example: 'John' })
	firstName: string

	@Column()
	@ApiProperty({ example: 'Doe' })
	lastName: string

	@Column()
	@ApiProperty({ example: '1990-01-01' })
	dateOfBirth: string

	@Column()
	@ApiProperty({ example: '2022-01-01' })
	startDate: string

	@Column()
	@ApiProperty({ example: 'IT' })
	department: string

	@Column()
	@ApiProperty({ example: '123 Main St' })
	street: string

	@Column()
	@ApiProperty({ example: 'City' })
	city: string

	@Column()
	@ApiProperty({ example: 'State' })
	state: string

	@Column()
	@ApiProperty({ example: '12345' })
	zipCode: string

	constructor(partial: Partial<Employee>) {
		Object.assign(this, partial)
	}
}
