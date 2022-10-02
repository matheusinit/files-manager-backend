import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity({ name: 'files' })
export class File {
  @PrimaryColumn()
  id: string

  @Column()
  filename: string

  @Column()
  originalName: string

  @Column({ nullable: true })
  type: string

  @Column()
  size: number

  @CreateDateColumn()
  createdAt: Date

  constructor () {
    this.id = uuidv4()
  }
}
