import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class ProvinceSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const provinces = [
      //Provinces of Beni
      { Name: 'Cercado', Description: 'Provincia de Beni', IsActive: true, DepartmentId: 1 },
      { Name: 'Iténez', Description: 'Provincia de Beni', IsActive: true, DepartmentId: 1 },
      { Name: 'José Ballivián', Description: 'Provincia de Beni', IsActive: true, DepartmentId: 1 },
      { Name: 'Mamoré', Description: 'Provincia de Beni', IsActive: true, DepartmentId: 1 },
      { Name: 'Marbán', Description: 'Provincia de Beni', IsActive: true, DepartmentId: 1 },
      { Name: 'Moxos', Description: 'Provincia de Beni', IsActive: true, DepartmentId: 1 },
      { Name: 'Vaca Díez', Description: 'Provincia de Beni', IsActive: true, DepartmentId: 1 },
      { Name: 'Yacuma', Description: 'Provincia de Beni', IsActive: true, DepartmentId: 1 },

      //Provinces of Chuquisaca
      { Name: 'Belisario Boeto', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Hernando Siles', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Jaime Zudáñez', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Juana Azurduy de Padilla', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Luis Calvo', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Nor Cinti', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Oropeza', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Sud Cinti', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Tomina', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },
      { Name: 'Yamparáez', Description: 'Provincia de Chuquisaca', IsActive: true, DepartmentId: 2 },

      //Provinces of Cochabamba
      { Name: 'Arani', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Arque', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Ayopaya', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Bolívar', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Capinota', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Carrasco', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Cercado', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Chapare', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Esteban Arce', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Germán Jordán', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Mizque', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Narciso Campero', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Punata', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Quillacollo', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Tapacarí', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },
      { Name: 'Tiraque', Description: 'Provincia de Cochabamba', IsActive: true, DepartmentId: 3 },

      // Provinces of La Paz
      { Name: 'Abel Iturralde', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Aroma', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Bautista Saavedra', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Caranavi', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Eliodoro Camacho', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Franz Tamayo', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Gualberto Villarroel', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Ingavi', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Inquisivi', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'José Manuel Pando', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'José Ramón Loayza', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Larecaja', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Los Andes', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Manco Kapac', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Muñecas', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Nor Yungas', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Omasuyos', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Pacajes', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Pedro Domingo Murillo', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },
      { Name: 'Sud Yungas', Description: 'Provincia de La Paz', IsActive: true, DepartmentId: 4 },

      // Provinces of Oruro
      { Name: 'Atahuallpa', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Carangas', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Cercado', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Eduardo Avaroa', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Ladislao Cabrera', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Nor Carangas', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Pantaleón Dalence', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Poopó', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Puerto de Mejillones', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Sabaya', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Sajama', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'San Pedro de Totora', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Saucari', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Sebastián Pagador', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Sud Carangas', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      { Name: 'Tomás Barrón', Description: 'Provincia de Oruro', IsActive: true, DepartmentId: 5 },
      
      // Provinces of Pando
      { Name: 'Abuná', Description: 'Provincia de Pando', IsActive: true, DepartmentId: 6 },
      { Name: 'Federico Román', Description: 'Provincia de Pando', IsActive: true, DepartmentId: 6 },
      { Name: 'Madre de Dios', Description: 'Provincia de Pando', IsActive: true, DepartmentId: 6 },
      { Name: 'Manuripi', Description: 'Provincia de Pando', IsActive: true, DepartmentId: 6 },
      { Name: 'Nicolás Suárez', Description: 'Provincia de Pando', IsActive: true, DepartmentId: 6 },

      //Provinces of Potosí
      { Name: 'Alonso de Ibáñez', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Antonio Quijarro', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Bernardino Bilbao Rioja', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Charcas', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Chayanta', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Cornelio Saavedra', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Daniel Campos', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Enrique Baldivieso', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'José María Linares', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Modesto Omiste', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Nor Chichas', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Nor Lipez', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Rafael Bustillo', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Sud Chichas', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Sud Lipez', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },
      { Name: 'Tomás Frías', Description: 'Provincia de Potosí', IsActive: true, DepartmentId: 7 },

      //Provinces of Santa Cruz
      { Name: 'Andrés Ibáñez', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Ángel Sandoval', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Chiquitos', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Cordillera', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Florida', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Germán Busch', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Guarayos', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Ichilo', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Ignacio Warnes', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'José Miguel de Velasco', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Manuel María Caballero', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Ñuflo de Chávez', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Obispo Santistevan', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Sara', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },
      { Name: 'Vallegrande', Description: 'Provincia de Santa Cruz', IsActive: true, DepartmentId: 8 },

      //Provinces of Tarija
      { Name: 'Aniceto Arce', Description: 'Provincia de Tarija', IsActive: true, DepartmentId: 9 },
      { Name: 'Burdet O\'Connor', Description: 'Provincia de Tarija', IsActive: true, DepartmentId: 9 },
      { Name: 'Cercado', Description: 'Provincia de Tarija', IsActive: true, DepartmentId: 9 },
      { Name: 'Eustaquio Méndez', Description: 'Provincia de Tarija', IsActive: true, DepartmentId: 9 },
      { Name: 'Gran Chaco', Description: 'Provincia de Tarija', IsActive: true, DepartmentId: 9 },
      { Name: 'José María Avilés', Description: 'Provincia de Tarija', IsActive: true, DepartmentId: 9 }
    ];

    await dataSource
    .createQueryBuilder()
    .insert()
    .into('provinces')
    .values(provinces)
    .orIgnore()
    .execute();
  }
}
