import { Controller, Get } from '@nestjs/common';
import { CsvConverterService } from '../services/csv-converter.service';


@Controller('api/v1/csv-converter')
export class CsvConverterController {
  constructor(private readonly appService: CsvConverterService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
