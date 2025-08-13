import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDepartmentTable1751838391958 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'departments',
        columns: [
          {
            name: 'DepartmentId',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Name',
            type: 'varchar',
            isUnique: true,
            length: '100',
          },
          {
            name: 'Description',
            type: 'varchar',
            isNullable: true,
            length: '255',
          },
          { name: 'IsActive', 
            type: 'boolean', 
            default: true 
          },
          { name: 'CreatedAt', 
            type: 'timestamp', 
            default: 'now()' 
          },
          { name: 'UpdatedAt', 
            type: 'timestamp', 
            default: 'now()' 
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('departments');
  }
}
