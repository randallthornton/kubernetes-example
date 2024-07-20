import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './data.controller';
import { OrmService } from './orm/orm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './data/data.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Data],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Data]),
  ],
  controllers: [AppController, DataController],
  providers: [AppService, OrmService],
})
export class AppModule {}
