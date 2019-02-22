import { CatEntity } from '@lib-backend/cats/entities/cats.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly repository: Repository<CatEntity>
  ) {}

  async create(cat: Cat) {
    return await this.repository.create(cat);
  }

  async findAll(): Promise<CatEntity[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<CatEntity> {
    return await this.repository.findOne(id);
  }
}
