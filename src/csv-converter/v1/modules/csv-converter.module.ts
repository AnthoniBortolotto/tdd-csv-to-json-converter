import { Module } from '@nestjs/common';
import { CsvConverterController } from '../controllers/csv-converter.controller';
import { CsvConverterService } from '../services/csv-converter.service';


@Module({
  imports: [],
  controllers: [CsvConverterController],
  providers: [CsvConverterService],
})
export class CsvConverterModule {}
