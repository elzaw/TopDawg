import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class CustomerDto {
  @ApiProperty({ description: 'Customer ID', example: '2884' })
  customer_id: string;

  @ApiProperty({ description: 'Customer First Name', example: 'Leroy' })
  first_name: string;

  @ApiProperty({ description: 'Customer Last Name', example: 'Jenkins' })
  last_name: string;

  @ApiProperty({ description: 'Customer phone number with prefix', example: '1 234 567 89 01' })
  phone: string;
}

class AddressToDto {
  @ApiProperty({ description: 'Address ID', example: '2442' })
  address_id: string;

  @ApiProperty({ description: 'Address line 1', example: '123 Main Street' })
  address_1: string;

  @ApiPropertyOptional({ description: 'Address line 2', example: 'APT 111', nullable: true })
  address_2: string | null;

  @ApiProperty({ description: 'City', example: 'Edison' })
  city: string;

  @ApiProperty({ description: 'State Code', example: 'NJ' })
  state_code: string;

  @ApiProperty({ description: 'Country Code (2 characters)', example: 'US' })
  country_code: string;

  @ApiProperty({ description: 'ZIP Code', example: '08818' })
  zip_code: string;
}

class OrderTransactionDto {
  @ApiProperty({ description: 'TopDawg product ID', example: 'S000487B001525P000444V002' })
  tdid: string;

  @ApiProperty({ description: 'Product unique code name', example: 'Macaron-no-window-1' })
  product_code: string;

  @ApiProperty({ description: 'Transaction ID', example: '24662' })
  transaction_id: string;

  @ApiProperty({ description: 'Price/category identifier of product', example: 'pet-supplies' })
  price: string;

  @ApiProperty({ description: 'Quantity purchased', example: 'pet-supplies' })
  quantity: string;

  @ApiProperty({ description: 'Gross cost', example: '15.05' })
  gross: string;

  @ApiProperty({ description: 'Packing fee of product charged by supplier', example: '1.02' })
  packing_fee: string;

  @ApiProperty({ description: 'Shipping cost', example: '3.02' })
  shipping: string;

  @ApiProperty({ description: 'Total cost', example: '3.02' })
  total: string;

  @ApiProperty({ description: 'Transaction status', example: '1' })
  status: string;
}

class OrderDto {
  @ApiProperty({ description: 'Order ID', example: '18453' })
  order_id: string;

  @ApiProperty({ description: 'Order Creation Date', example: '2021-06-10' })
  created_at: string;

  @ApiPropertyOptional({ description: 'Order Delivery Date (null if not delivered)', example: '2021-06-10', nullable: true })
  delivered_at: string | null;

  @ApiProperty({ description: 'Gross cost of products', example: '15.05' })
  gross: string;

  @ApiProperty({ description: 'Shipping cost of products', example: '3.02' })
  shipping: string;

  @ApiProperty({ description: 'Total cost of products', example: '18.07' })
  total: string;

  @ApiProperty({ description: 'Order general status ID', example: '1' })
  status: string;

  @ApiPropertyOptional({ description: 'Additional metadata attachment (JSON format)', example: '{"id":4456, "order":13334562,"source":"shopify"}' })
  metadata?: string;

  @ApiPropertyOptional({ description: 'JSON formatted checkout messages', example: '[{"success": true, "msg": "Order was processed successfully."}]' })
  checkout_messages?: string;

  @ApiProperty({ type: CustomerDto, description: 'Purchasing customer details' })
  customer: CustomerDto;

  @ApiProperty({ type: AddressToDto, description: 'Order delivery address' })
  address_to: AddressToDto;

  @ApiProperty({ type: [OrderTransactionDto], description: 'List of order transactions/items' })
  transactions: OrderTransactionDto[];
}

class PaginationDto {
  @ApiProperty({ description: 'Total count of found orders', example: 2729 })
  total: number;

  @ApiProperty({ description: 'Count of orders returned in the current page', example: 10 })
  count: number;

  @ApiProperty({ description: 'Per-page page setting limit request', example: 10 })
  per_page: number;

  @ApiProperty({ description: 'Current page retrieved', example: 3 })
  current_page: number;

  @ApiProperty({ description: 'Total count of pages generated', example: 273 })
  total_pages: number;
}

export class ListOrdersResponseDto {
  @ApiProperty({ type: [OrderDto], description: 'Array of orders matching filters' })
  orders: OrderDto[];

  @ApiProperty({ type: PaginationDto, description: 'Pagination details' })
  pagination: PaginationDto;
}
