
import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserDepartamentTable1753677592161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({            
                    name:'user_departament',
                    columns: [
                        {
                            name:'UserDepartamentID',
                            type:'int',
                            isPrimary:true,
                            isGenerated: true,
                            generationStrategy: 'increment',
                        },
                        {
                            name: 'UserID',
                            type: 'int',

                        },
                        {
                            name:'DepartamentID',
                            type:'int',
                        },
                        {
                            name:'createdAt',
                            type:'timestamp',
                            default: 'now()',
                        }
                    ]
                }
                
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_departament')
    }

}
