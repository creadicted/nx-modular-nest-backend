import { CatsModule } from '@lib-backend/cats';
import { Module } from '@nestjs/common';

@Module({
  imports: [CatsModule]
})
export class AppModule {}
