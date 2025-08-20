export class LevelEntity {

  constructor(
    public LevelId: number,
    public Description: string,
    public IsActive: boolean,
    public CreatedAt: Date,
    public UpdatedAt: Date,
  ) {}
}
