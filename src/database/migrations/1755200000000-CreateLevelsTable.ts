import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLevelsTable1755200000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'levels',
        columns: [
          {
            name: 'LevelId',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Description',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          { 
            name: 'IsActive', 
            type: 'boolean', 
            default: true 
          },
          { 
            name: 'CreatedAt', 
            type: 'timestamp', 
            default: 'now()' 
          },
          { 
            name: 'UpdatedAt', 
            type: 'timestamp', 
            default: 'now()' 
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('levels');
  }
}
