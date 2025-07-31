import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export default class DepartmentSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const departments = [
      {
        Name: 'La Paz',
        Description: 'Sede de gobierno y lago Titicaca.',
        IsActive: true
      },
      {
        Name: 'Cochabamba',
        Description: 'Clima templado y gastronomía.',
        IsActive: true
      },
      {
        Name: 'Santa Cruz',
        Description: 'Región más extensa con clima tropical.',
        IsActive: true
      },
      {
        Name: 'Oruro',
        Description: 'Famoso por su carnaval y minería.',
        IsActive: true
      },
      {
        Name: 'Potosí',
        Description: 'Histórico Cerro Rico y pasado minero.',
        IsActive: true
      },
      {
        Name: 'Tarija',
        Description: 'Viñedos y producción de vino.',
        IsActive: true
      },
      {
        Name: 'Chuquisaca',
        Description: 'Capital histórica Sucre.',
        IsActive: true
      },
      {
        Name: 'Beni',
        Description: 'Biodiversidad amazónica y ganadería.',
        IsActive: true
      },
      {
        Name: 'Pando',
        Description: 'Amazonía norte y recursos forestales.',
        IsActive: true
      },
    ];

    await dataSource
      .createQueryBuilder()
      .insert()
      .into('departments')
      .values(departments)
      .orIgnore()
      .execute();
  }
}