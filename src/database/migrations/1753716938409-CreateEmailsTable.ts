import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEmailsTable1753716938409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'emails',
        columns: [
          {
            name: 'EmailID',
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
            name: 'Subject',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'Body',
            type: 'text',
          },
          {
            name: 'SentAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('emails');
  }
}
