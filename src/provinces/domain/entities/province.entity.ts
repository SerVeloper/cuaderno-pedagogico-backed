export class ProvinceEntity {

  constructor(
    public province_id: number,
    public name: string,
    public description: string,
    public is_active: boolean,
    public department_id: number,
    public created_at: Date,
    public updated_at: Date,
  ) {}
}
