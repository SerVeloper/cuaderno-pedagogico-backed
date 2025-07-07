import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePermissionsTable1751759986304 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'permissions',
        columns: [
          {
            name: 'PermissionID',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'PermissionName',
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
    await queryRunner.dropTable('permissions');
  }
}
