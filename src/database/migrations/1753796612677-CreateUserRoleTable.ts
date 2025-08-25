import { Column, MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserRoleTable1753796612677 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_role',
        columns: [
          {
            name: 'UserRoleID',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'UserID',
            type: 'int',
          },
          {
            name: 'RoleID',
            type: 'int',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['UserID'],
            referencedTableName: 'users',
            referencedColumnNames: ['UserID'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['RoleID'],
            referencedTableName: 'roles',
            referencedColumnNames: ['RoleID'],
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_role');
  }
}
