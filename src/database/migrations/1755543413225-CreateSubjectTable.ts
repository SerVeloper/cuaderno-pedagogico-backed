import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

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

        await queryRunner.createForeignKey('subject', new TableForeignKey({
            columnNames: ['LevelId'],
            referencedTableName: 'levels',
            referencedColumnNames: ['LevelId'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('subject', 'FK_subject_LevelId');
        await queryRunner.dropTable('subject');
    }
}
