import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDimentionTable1755177704118 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "dimension",
            columns: [
                {
                    name: "DimensionID",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "Name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "Description",
                    type: "text",
                    isNullable: true
                },
                {
                    name: "SubjectID",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "CourseID",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "IsActive",
                    type: "boolean",
                    default: true
                },
                {
                    name: "CreatedAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "UpdatedAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP"
                }          

            ],
            // foreignKeys: [
            //     {columnNames: ["SubjectID"],
            //         referencedTableName: "subjects",
            //         referencedColumnNames: ["SubjectID"]
            //     },
            //     {columnNames: ["CourseID"],
            //         referencedTableName: "courses",
            //         referencedColumnNames: ["CourseID"]
            //     }
            // ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dimension");
    }

}
