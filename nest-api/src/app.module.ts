import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './data.controller';
import { OrmService } from './orm/orm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './data/data.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'sqlite',
        database: configService.get('DB_DATABASE'),
        entities: [Data],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Data]),
  ],
  controllers: [AppController, DataController],
  providers: [AppService, OrmService],
})
export class AppModule {}
