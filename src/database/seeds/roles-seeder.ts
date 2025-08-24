import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class RoleSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const roles = [
      {
        RoleName: 'admin',
        Description: 'Administrator with full access',
       
      },
      {
        RoleName: 'user',
        Description: 'Regular user with limited access',
       
      },
      {
        RoleName: 'guest',
        Description: 'Guest user with minimal access',
       
      }

     
    ];

    await dataSource
      .createQueryBuilder()
      .insert()
      .into('roles')
      .values(roles)
      .orIgnore()
      .execute();
  }
}