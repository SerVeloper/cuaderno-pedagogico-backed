export class DepartmentEntity {

  constructor(
    public DepartmentId: number,
    public Name: string,
    public Description: string,
    public IsActive: boolean,
    public CreatedAt: Date,
    public UpdatedAt: Date,
  ) {}
}
