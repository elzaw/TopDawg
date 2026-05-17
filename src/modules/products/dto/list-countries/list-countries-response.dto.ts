import { ApiProperty } from '@nestjs/swagger';

class CountryDto {
  @ApiProperty({ description: 'Country Name' })
  name: string;

  @ApiProperty({ description: 'Country Code (returned as state_code by API)' })
  state_code: string;
}

class PaginationMetadataDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  total_pages: number;
}

export class ListCountriesResponseDto {
  @ApiProperty({ type: [CountryDto] })
  countries: CountryDto[];

  @ApiProperty()
  pagination: PaginationMetadataDto;
}
