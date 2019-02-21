import {Roles} from '@lib-common/cats/decorators/roles.decorator';
import {RolesGuard} from '@lib-common/cats/guards/roles.guard';
import {LoggingInterceptor} from '@lib-common/cats/interceptors/logging.interceptor';
import {TransformInterceptor} from '@lib-common/cats/interceptors/transform.interceptor';
import {ParseIntPipe} from '@lib-common/cats/pipes/parse-int.pipe';
import {Body, Controller, Get, Param, Post, UseGuards, UseInterceptors} from '@nestjs/common';
import {CatsService} from './cats.service';
import {CreateCatDto} from './dto/create-cat.dto';
import {Cat} from './interfaces/cat.interface';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id
  ) {
    // logic
  }
}
