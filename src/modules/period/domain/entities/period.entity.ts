export class Period {
  constructor(
    public periodID: number,
    public name: string,
    public startDate: Date,
    public endDate: Date,
    public year: number,
    public createdAt: Date,
  ) {}
}