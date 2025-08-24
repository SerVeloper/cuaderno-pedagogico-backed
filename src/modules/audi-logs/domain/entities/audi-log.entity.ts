export class AudiLog {
  constructor(
    public AudiLogID: number,
    public UserID: number,
    public Action: string,
    public Details: string,
    public IPAddress: string,
    public CreatedAt: Date,
    public UpdatedAt: Date,
    public DeletedAt: Date | null,
  ) {}
}
