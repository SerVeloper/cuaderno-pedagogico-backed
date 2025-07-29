export class UserRole {
  constructor(
    public UserRoleID: number,
    public UserID: number,
    public RoleID: number,
    public createdAt: Date,
  ) {}
}
