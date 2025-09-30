import { Injectable } from '@nestjs/common';

@Injectable()
export class CsvConverterService {
  getHello(): string {
    return 'Hello World!';
  }
}
