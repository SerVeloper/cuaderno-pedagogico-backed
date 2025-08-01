import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePeriodTable1753929691362 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'period',
        columns: [
          {
            name: 'PeriodID',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'StartDate',
            type: 'date',
          },
          {
            name: 'EndDate',
            type: 'date',
          },
          {
            name: 'Year',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'CreatedAt',
            type: 'timestamp',
            default: 'now()',
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.dropTable('period');
  }
}