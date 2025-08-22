export class Role {
  constructor(
    public RoleID: number,
    public RoleName: string,
    public Description: string,
    public CreatedAt: Date,
    public UpdatedAt: Date,
    public DeletedAt: Date | null,
  ) {}
}