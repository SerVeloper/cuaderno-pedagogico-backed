export class DepartmentEntity {

  constructor(
    public departmentID: number,
    public name: string,
    public description: string,
    public isActive: boolean,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
