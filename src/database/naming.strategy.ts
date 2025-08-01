import { DefaultNamingStrategy } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class PascalNamingStrategy extends DefaultNamingStrategy {
  tableName(className: string, customName: string): string {
    return customName || snakeCase(className);
  }

  columnName(propertyName: string): string {
    return propertyName; // Respeta EXACTAMENTE el nombre de la propiedad
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return referencedColumnName;
  }
}