import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Employee {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column()
	dateOfBirth: string

	@Column()
	startDate: string

	@Column()
	department: string

	@Column()
	street: string

	@Column()
	city: string

	@Column()
	state: string

	@Column()
	zipCode: string

	constructor(partial: Partial<Employee>) {
		Object.assign(this, partial)
	}
}
