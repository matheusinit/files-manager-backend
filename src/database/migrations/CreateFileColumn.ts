import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateFileColumn1661726676158 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'files',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'filename',
          type: 'varchar'
        },
        {
          name: 'originalName',
          type: 'varchar'
        },
        {
          name: 'size',
          type: 'int'
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('files')
  }
}
