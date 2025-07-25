import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CrearteTermsAndConditions1752791906993
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'terms_and_conditions',
        columns: [
          {
            name: 'TnCID',
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
            name: 'Version',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'CreatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        // foreignKeys: [
        //   {
        //     columnNames: ['UserID'],
        //     referencedTableName: 'users',
        //     referencedColumnNames: ['UserID'],
        //     onDelete: 'CASCADE',
        //   },
        // ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('terms_and_conditions');
  }
}
