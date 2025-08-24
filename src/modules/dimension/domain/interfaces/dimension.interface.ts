import { Dimension } from '../entities/dimension.entity';

export interface DimensionRepositoryInterface {
  create(dimension: Dimension): Promise<Dimension>;
  findById(id: number): Promise<Dimension | null>;
  findAll(): Promise<Dimension[]>;
  update(id: number, dimension: Dimension): Promise<Dimension>;
  delete(id: number): Promise<void>;
}
