import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddTypeColumnToFileTable1663617918046 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('files', new TableColumn({
      name: 'type',
      type: 'varchar',
      isNullable: true
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('files', 'type')
  }
}
