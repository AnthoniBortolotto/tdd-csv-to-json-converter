import { Test, TestingModule } from '@nestjs/testing';
import { CsvConverterController } from './csv-converter.controller';
import { CsvConverterService } from '../services/csv-converter.service';

describe('CsvConverterController', () => {
  let csvConverterController: CsvConverterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CsvConverterController],
      providers: [CsvConverterService],
    }).compile();

    csvConverterController = app.get<CsvConverterController>(
      CsvConverterController,
    );
  });

  describe('root', () => {
    const successfulCsvInput = {
      csv: `name,age,city
John,30,New York
Jane,25,Los Angeles`,
    };
    const invalidCsvInput = { csv: `name|age|city` };
    const missingCsvInput = {};
    const expectedJsonOutput = [
      { name: 'John', age: '30', city: 'New York' },
      { name: 'Jane', age: '25', city: 'Los Angeles' },
    ];
    it('should return the CSV as a valid JSON', () => {
      expect(
        csvConverterController.convertCsvToJson(successfulCsvInput),
      ).toEqual(expectedJsonOutput);
    });
    it('should throw an error if the csv field is missing', () => {
      expect(() =>
        csvConverterController.convertCsvToJson(missingCsvInput as any),
      ).toThrow();
    });
    it('should throw an error if the csv field does not contain valid CSV data', () => {
      expect(() =>
        csvConverterController.convertCsvToJson(invalidCsvInput),
      ).toThrow();
    });
  });
});
