import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class ConvertCsvToJsonDto {
  @IsNotEmpty({
    message: 'The csv field cannot be empty.',
  })
  @IsString({
    message: 'The csv field must be a string containing CSV data.',
    always: true,
  })
  @Matches(
    /^(?:[^\n,]+,)*[^\n,]+\n(?:[^\n,]+,)*[^\n,]+(?:\n(?:[^\n,]+,)*[^\n,]+)*$/,
    {
      message: 'The csv field must contain valid CSV data.',
    },
  )
  csv: string;
}
