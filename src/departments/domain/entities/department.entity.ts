export class DepartmentEntity {

  constructor(
    public DepartmentID: number,
    public Name: string,
    public Description: string,
    public IsActive: boolean,
    public CreatedAt: Date,
    public UpdatedAt: Date,
  ) {}
}
