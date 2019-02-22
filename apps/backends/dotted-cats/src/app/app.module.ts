import { CatsModule } from '@lib-backend/cats';
import { CatEntity } from '@lib-backend/cats/entities/cats.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest-backend-sample',
      synchronize: true,
      entities: [CatEntity]
    }),
    CatsModule
  ]
})
export class AppModule {}
