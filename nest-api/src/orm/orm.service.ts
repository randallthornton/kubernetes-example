import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from '../data/data.entity';

@Injectable()
export class OrmService {
  constructor(
    @InjectRepository(Data) private dataRepository: Repository<Data>,
  ) {}

  async getData() {
    return await this.dataRepository.find();
  }

  async createData(data: { name: string }) {
    return await this.dataRepository.save(data);
  }
}
