import { Gender } from './gender';
export class StudentEntity {
  constructor(
    public StudentId: number,
    public FirstName: string,
    public LastName: string,
    public IdentityNumber: string,
    public Gender: Gender,
    public BirthDate: Date,
    public Address: string,
    public Phone: string,
    public GuardianName: string,
    public GuardianPhone: string,
    public Level: number,
    public Course: number,
    public Section: number,
    public CreatedAt: Date,
    public UpdatedAt: Date,
    public DeletedAt: Date | null,
  ) {}
}
