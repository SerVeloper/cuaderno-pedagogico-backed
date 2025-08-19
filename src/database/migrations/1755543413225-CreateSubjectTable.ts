import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSubjectTable1755543413225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'subject',
            columns: [
                {
                    name: 'SubjectId', 
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'Name',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'LevelId',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'EvaluationType',
                    type: 'enum',
                    enum: ['Formative', 'Summative'],
                    isNullable: false
                },
                {
                    name: 'CreatedAt', 
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'UpdatedAt', 
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP'
                }
            ]
        }));

        // índice para LevelId 
        // await queryRunner.createIndex('subject', new Index('IDX_SUBJECT_LEVEL', ['LevelId']));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subject');
    }
}
