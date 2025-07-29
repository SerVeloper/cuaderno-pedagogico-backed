export class Emails {
  constructor(
    public EmailID: number,
    public UserID: number,
    public Subject: string,
    public Body: string,
    public SentAt: Date,
  ) {}
}
