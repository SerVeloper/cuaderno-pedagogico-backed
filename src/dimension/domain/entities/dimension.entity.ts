export class Dimension {
constructor (
    public DimensionID: number,
    public Name: string,
    public Description: string,
    public SubjectID: number,
    public CourseID: number,
    public IsActive: boolean,
    public CreatedAt: Date,
    public UpdatedAt: Date
) {}
}
