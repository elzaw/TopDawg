import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class AddressErrorDetailsDto {
  @ApiProperty({ description: 'Address ID', example: '229' })
  address_id: string;

  @ApiProperty({ description: 'Address Line 1', example: '55502 Firstsestone' })
  address_1: string;

  @ApiPropertyOptional({ description: 'Address Line 2', example: null, nullable: true })
  address_2: string | null;

  @ApiProperty({ description: 'City', example: 'La Quinta' })
  city: string;

  @ApiProperty({ description: 'State Code', example: 'CA' })
  state_code: string;

  @ApiProperty({ description: 'ZIP Code', example: '92253' })
  zip_code: string;

  @ApiProperty({ description: 'Country Code (2 characters)', example: 'US' })
  country_code: string;
}

class ErrorMessageDto {
  @ApiProperty({ description: 'Error code identifier', example: 'invalid_address' })
  error: string;

  @ApiProperty({ description: 'Error message text explanation', example: 'Address saved but was invalid...' })
  error_text: string;

  @ApiPropertyOptional({ type: AddressErrorDetailsDto, description: 'Address object related to the validation error' })
  address?: AddressErrorDetailsDto;
}

export class CreateCustomerResponseDto {
  @ApiProperty({ description: 'Customer ID', example: '2884' })
  customer_id: string;

  @ApiProperty({ description: 'Customer Create Status (1 = success/saved, 0 = failed)', example: '1' })
  status: string;

  @ApiProperty({ type: [ErrorMessageDto], description: 'List of validation or processing error messages' })
  error_messages: ErrorMessageDto[];
}
