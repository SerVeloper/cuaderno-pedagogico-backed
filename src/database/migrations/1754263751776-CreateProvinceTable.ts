import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProvinceTable1754263751776 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'provinces',
        columns: [
          {
            name: 'ProvinceId',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'Description',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'IsActive',
            type: 'boolean',
            default: true,
          },
          {
            name: 'DepartmentId',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'CreatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'UpdatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'provinces',
      new TableForeignKey({
        columnNames: ['DepartmentId'],
        referencedTableName: 'departments',
        referencedColumnNames: ['DepartmentId'],
        onDelete: 'RESTRICT', 
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('provinces', 'FK_provinces_DepartmentId');
    await queryRunner.dropTable('provinces');
  }
}
