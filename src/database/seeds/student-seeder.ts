import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export  class StudentSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {

    const now = new Date();

    const students = [
      {
        FirstName: "Armando",
        LastName: "Nuñez",
        IdentityNumber: "126654",
        Gender: "Male",
        BirthDate: new Date("2005-03-15"),
        Address: "Av. Libertad 123, La Paz",
        Phone: "+591 71234567",
        GuardianName: "Carlos Nuñez",
        GuardianPhone: "+591 76543210",
        Level: 1,
        Course: 1,
        Section: 1,
        CreatedAt: now,
        UpdatedAt: null,
        DeletedAt: null,
      },
      {
        FirstName: "Lucía",
        LastName: "Fernández",
        IdentityNumber: "987654",
        Gender: "Female",
        BirthDate: new Date("2006-07-21"),
        Address: "Calle Bolívar 456, Cochabamba",
        Phone: "+591 72345678",
        GuardianName: "María Fernández",
        GuardianPhone: "+591 73456789",
        Level: 2,
        Course: 1,
        Section: 2,
        CreatedAt: now,
        UpdatedAt: null,
        DeletedAt: null,
      },
      {
        FirstName: "Diego",
        LastName: "Pérez",
        IdentityNumber: "654321",
        Gender: "Male",
        BirthDate: new Date("2004-11-02"),
        Address: "Av. América 789, Santa Cruz",
        Phone: "+591 73456789",
        GuardianName: "José Pérez",
        GuardianPhone: "+591 74567890",
        Level: 3,
        Course: 2,
        Section: 1,
        CreatedAt: now,
        UpdatedAt: null,
        DeletedAt: null,
      },
    ];
 await dataSource
      .createQueryBuilder()
      .insert()
      .into('student')
      .values(students)
      .orIgnore()
      .execute();
  }
}
