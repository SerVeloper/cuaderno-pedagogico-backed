import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAudiLogsTable1754801798824 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'audi_logs',
        columns: [
          {
            name: 'AudiLogID',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'UserID',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'Action',
            type: 'varchar',
          },
          {
            name:'Details',
            type: 'text',

          },
            {
            name: 'IPAddress',
            type: 'varchar',
            length: '45', 
            isNullable: true,
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
          {
            name: 'DeletedAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['UserID'],
            referencedTableName: 'users',
            referencedColumnNames: ['UserID'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('audi_logs');
  }
}
