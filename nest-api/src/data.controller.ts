import { Controller, Get } from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor() {}

  @Get()
  getData(): any {
    return [
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
      { id: 3, name: 'Third' },
    ];
  }
}
