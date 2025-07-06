import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRolePermissionsTable1751760269508
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'role_permissions',
        columns: [
          {
            name: 'RolePermissionID',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'RoleID', type: 'int' },
          { name: 'PermissionID', type: 'int' },
        ],
        foreignKeys: [
          {
            columnNames: ['RoleID'],
            referencedTableName: 'roles',
            referencedColumnNames: ['RoleID'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['PermissionID'],
            referencedTableName: 'permissions',
            referencedColumnNames: ['PermissionID'],
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('role_permissions');
  }
}
