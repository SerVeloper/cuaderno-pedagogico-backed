import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export default class LevelSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const levels = [
      {
        Description: 'Inicial',
        IsActive: true
      },
      {
        Description: 'Primaria',
        IsActive: true
      },
      {
        Description: 'Secundaria',
        IsActive: true
      }
    ];

    await dataSource
      .createQueryBuilder()
      .insert()
      .into('levels')
      .values(levels)
      .orIgnore()
      .execute();
  }
}
