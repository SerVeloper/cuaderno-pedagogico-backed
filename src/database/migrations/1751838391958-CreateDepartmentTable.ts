import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDepartmentTable1751838391958 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'departments',
        columns: [
          {
            name: 'DepartmentID',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'DepartmentName',
            type: 'varchar',
            isUnique: true,
            length: '50',
          },
          {
            name: 'Description',
            type: 'varchar',
            isNullable: true,
            length: '255',
          },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('departments');
  }
}
