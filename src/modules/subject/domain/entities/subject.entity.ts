import { EvaluationType } from './evaluation-type';

export class Subject {
  constructor(
    public SubjectId: number,
    public Name: string,
    public LevelId: number,
    public EvaluationType: EvaluationType,
    public CreatedAt: Date,
    public UpdatedAt: Date,
  ) {}
}