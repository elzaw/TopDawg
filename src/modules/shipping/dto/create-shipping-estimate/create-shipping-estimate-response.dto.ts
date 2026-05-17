import { ApiProperty } from '@nestjs/swagger';

export class CreateShippingEstimateResponseDto {
  @ApiProperty({ description: 'TopDawg Product ID', example: 'S000487B001525P000444V002' })
  tdid: string;

  @ApiProperty({ description: 'Area Zip Code for the delivery location', example: '08818' })
  zip_code: string;

  @ApiProperty({ description: 'Two symbol Country Code', example: 'US' })
  country: string;

  @ApiProperty({ description: 'Two symbol Country Code', example: 'US' })
  country_code: string;

  @ApiProperty({ description: 'Shipping service provider name', example: 'USPS' })
  provider: string;

  @ApiProperty({ description: 'Name of the Shipping provider service type', example: 'Parcel Select' })
  name: string;

  @ApiProperty({ description: 'Token of the Shipping provider service type', example: 'usps_parcel_select' })
  token: string;

  @ApiProperty({ description: 'Shipping Cost', example: 8.04 })
  amount: number;

  @ApiProperty({ description: 'Currency in which shipping cost is calculated', example: 'USD' })
  currency: string;

  @ApiProperty({ description: 'Estimated duration of shipping in days', example: 7 })
  estimated_days: number;

  @ApiProperty({ description: 'Verbal estimated shipping duration details', example: 'Delivery in 2 to 8 days.' })
  duration_terms: string;

  @ApiProperty({ description: '75 px Shipping service provider brand image URL', example: 'https://shippo-static.s3.amazonaws.com/providers/75/USPS.png' })
  provider_image_75: string;

  @ApiProperty({ description: '200 px Shipping service provider brand image URL', example: 'https://shippo-static.s3.amazonaws.com/providers/200/USPS.png' })
  provider_image_200: string;
}
