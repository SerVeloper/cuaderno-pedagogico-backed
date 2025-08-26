import { AppDataSource } from './data-source';
import { UserSeeder } from './seeds/user-seeder';
import { DepartmentSeeder } from './seeds/DepartmentSeeder';
import { RoleSeeder } from './seeds/roles-seeder';
//import { UserRolesSeeder } from './seeds/user-roles-seeder';

// Hacer que runSeeders sea una función async
async function runSeeders() {
  try {
    // Inicializar la fuente de datos con await
    await AppDataSource.initialize();
    console.log('DataSource inicializado.');

    const seeders = [
      { seeder: new UserSeeder(), name: 'UserSeeder' },
      { seeder: new DepartmentSeeder(), name: 'DepartmentSeeder' },
      { seeder: new RoleSeeder(), name: 'RoleSeeder' },
      // { seeder: new UserRolesSeeder(), name: 'UserRolesSeeder' },
    ];

    // Usar await en el bucle para esperar a que cada seeder termine
    for (const { seeder, name } of seeders) {
      console.log(`Ejecutando ${name}...`);
      await seeder.run(AppDataSource); // Añadir await aquí
      console.log(`${name} completado.`);
    }

    // Cerrar la conexión con await
    await AppDataSource.destroy();
    console.log('Seeding completado exitosamente.');
  } catch (error) {
    console.error('Error durante el seeding:', error);
    process.exit(1);
  }
}

// Ejecutar la función
runSeeders();