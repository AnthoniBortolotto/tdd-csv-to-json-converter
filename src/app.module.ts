import { Module } from '@nestjs/common';
import { CsvConverterModule } from './csv-converter/v1/modules/csv-converter.module';

@Module({
  imports: [CsvConverterModule],
})
export class AppModule {}
