export class DepartmentEntity {
  // DepartmentID: number;
  // Name: string;
  // Description: string;
  // IsActive: boolean;
  // CreatedAt: Date;
  // UpdatedAt: Date;

  constructor(
    public departmentID: number,
    public name: string,
    public description: string,
    public isActive: boolean,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
