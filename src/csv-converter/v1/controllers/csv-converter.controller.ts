import { Body, Controller, Post } from '@nestjs/common';
import { CsvConverterService } from '../services/csv-converter.service';
import { ConvertCsvToJsonDto } from '../dtos/convert-csv-to-json.dto';

@Controller('api/v1/csv-converter')
export class CsvConverterController {
  constructor(private readonly csvConverterService: CsvConverterService) {}

  @Post('convert')
  convertCsvToJson(@Body() body: ConvertCsvToJsonDto): Array<any> {
    return this.csvConverterService.convertCsvToJson(body);
  }
}
