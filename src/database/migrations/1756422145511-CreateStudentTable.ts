import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStudentTable1756422145511 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'student',
        columns: [
          {
            name: 'StudentId',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'FirstName',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'LastName',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'IdentityNumber',
            type: 'varchar',
            length: '20',
         
          },
          {
            name: 'Gender',
            type: 'enum',
            enum: ['Male', 'Female', 'Other'],
          },
          {
            name: 'BirthDate',
            type: 'date',
          },
          {
            name: 'Address',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'Phone',
            type: 'varchar',
            length: '15',
          },
          {
            name: 'GuardianName',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'GuardianPhone',
            type: 'varchar',
            length: '15',
          },
          {
            name: 'Level',
            type: 'int',
          },
          {
            name: 'Course',
            type: 'int',
          },
          {
            name: 'Section',
            type: 'int',
          },
          {
            name: 'CreatedAt',
            type: 'timestamp',
            default: 'now()' 
          },
          {
            name: 'UpdatedAt',
            type: 'timestamp',
            isNullable:true,
          
          },
          {
            name: 'DeletedAt',
            type: 'timestamp',
            isNullable:true,
  
          },
        ],
        foreignKeys: [
          {
            columnNames: ['Level'],
            referencedTableName: 'levels',
            referencedColumnNames: ['LevelId'],
            onDelete: 'SET NULL',
          },
        //   {
        //     columnNames: ['Course'],
        //     referencedTableName: 'courses',
        //     referencedColumnNames: ['CourseId'],
        //     onDelete: 'SET NULL',
        //   },
        //   {
        //     columnNames: ['Section'],
        //     referencedTableName: 'sections',
        //     referencedColumnNames: ['SectionId'],
        //     onDelete: 'SET NULL',
        //   }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
