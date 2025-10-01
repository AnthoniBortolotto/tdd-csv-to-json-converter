import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConvertCsvToJsonDto } from '../dtos/convert-csv-to-json.dto';

@Injectable()
export class CsvConverterService {
  convertCsvToJson(convertCsvToJsonDto: ConvertCsvToJsonDto): Array<any> {
    try {
      const { csv } = convertCsvToJsonDto;
      if (csv) {
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        const result = [];

        for (let i = 1; i < lines.length; i++) {
          const obj = {};
          const currentLine = lines[i].split(',');

          for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentLine[j];
          }

          result.push(obj);
        }
        return result;
      }
      throw new InternalServerErrorException('CSV data is empty');
    } catch (error) {
      console.error('Error converting CSV to JSON:', error);
      throw new InternalServerErrorException('Error converting CSV to JSON');
    }
  }
}
