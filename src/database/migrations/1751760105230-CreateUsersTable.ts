import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1751760105230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    { name: "UserID", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "UserName", type: "varchar", isUnique: true, length: "50" },
                    { name: "Email", type: "varchar", isUnique: true, length: "100" },
                    { name: "PasswordHash", type: "varchar", length: "255" },
                    { name: "FullName", type: "varchar", length: "50" },
                    { name: "Phone" , type: "varchar", isNullable: true, length: "15" },
                    { name: "CreatedAt", type: "timestamp", default: 'now()' },
                    { name: "UpdatedAt", type: "timestamp", default: 'now()', onUpdate: 'now()' },
                    { name: "IsActive", type: "boolean", default: true },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
