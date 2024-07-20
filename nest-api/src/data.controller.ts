import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrmService } from './orm/orm.service';

@Controller('data')
export class DataController {
  constructor(private ormService: OrmService) {}

  @Get()
  async getData() {
    const stuff = await this.ormService.getData();

    return stuff;
  }

  @Post()
  async createData(@Body() request: { name: string }) {
    const stuff = await this.ormService.createData({ name: request.name });

    return stuff;
  }
}
