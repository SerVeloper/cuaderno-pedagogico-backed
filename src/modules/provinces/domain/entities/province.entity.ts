export class ProvinceEntity {

  constructor(
    public ProvinceId: number,
    public Name: string,
    public Description: string,
    public IsActive: boolean,
    public DepartmentId: number,
    public CreatedAt: Date,
    public UpdatedAt: Date,
  ) {}
}
