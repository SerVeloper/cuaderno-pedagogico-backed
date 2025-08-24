import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';

export class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    // Verifica si los usuarios ya existen (requiere async/await por TypeORM)
    const existingUsers = await dataSource.query(`
      SELECT "UserID", "UserName" FROM "user" WHERE "UserName" IN ('Admin', 'user');
    `);
    console.log('Usuarios existentes antes de inserción:', existingUsers);

    // Lista de usuarios con contraseñas hasheadas síncronamente
    const users = [
      {
        UserName: 'Admin',
        Email: 'admin@example.com',
        PasswordHash: bcrypt.hashSync('admin123', 10), // Hasheo síncrono
        FullName: 'Neloy Aravia',
        Phone: '1234567890',
        IsActive: true,
      },
      {
        UserName: 'user',
        Email: 'johndoe@example.com',
        PasswordHash: bcrypt.hashSync('user123', 10), // Hasheo síncrono
        FullName: 'John Doe',
        Phone: '0987654321',
        IsActive: true,
      },
    ];

    console.log('Contraseñas hasheadas síncronamente para:', users.map(u => u.UserName));

    // Insertar usuarios (requiere async/await por TypeORM)
    const query = `
      INSERT INTO "user" ("UserName", "Email", "PasswordHash", "FullName", "Phone", "IsActive")
      VALUES 
        ($1, $2, $3, $4, $5, $6),
        ($7, $8, $9, $10, $11, $12)
      ON CONFLICT DO NOTHING
      RETURNING "UserID", "UserName", "Email", "CreatedAt", "UpdatedAt", "IsActive";
    `;

    const parameters = [
      users[0].UserName,
      users[0].Email,
      users[0].PasswordHash,
      users[0].FullName,
      users[0].Phone,
      users[0].IsActive,
      users[1].UserName,
      users[1].Email,
      users[1].PasswordHash,
      users[1].FullName,
      users[1].Phone,
      users[1].IsActive,
    ];

    const result = await dataSource.query(query, parameters);
    console.log('Usuarios insertados (o ignorados por conflicto):', result);

    // Verifica usuarios después de inserción
    const usersAfter = await dataSource.query(`
      SELECT "UserID", "UserName" FROM "user" WHERE "UserName" IN ('Admin', 'user');
    `);
    console.log('Usuarios existentes después de inserción:', usersAfter);
  }
}