import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class UserRolesSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const userRoles = [
      {
        UserID: 1,
        RoleID: 1,
      },
      {
        UserID: 2,
        RoleID: 2,
      },
     
    ];

    await dataSource
      .createQueryBuilder()
      .insert()
      .into('user_role')
      .values(userRoles)
      .orIgnore()
      .execute();
  }
}