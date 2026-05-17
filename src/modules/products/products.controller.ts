import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { ListProductsDto } from './dto/list-products/list-products.dto';
import { ListProductsResponseDto } from './dto/list-products/list-products-response.dto';
import { CriticalUpdateListDto } from './dto/critical-update/critical-update-list.dto';
import { CriticalUpdateResponseDto } from './dto/critical-update/critical-update-response.dto';
import { ViewProductDto } from './dto/view-product/view-product.dto';
import { ViewProductResponseDto } from './dto/view-product/view-product-response.dto';
import { ProductQuantityDto } from './dto/product-quantity/product-quantity.dto';
import { ProductQuantityResponseDto } from './dto/product-quantity/product-quantity-response.dto';
import { ListDepartmentsDto } from './dto/list-departments/list-departments.dto';
import { ListDepartmentsResponseDto } from './dto/list-departments/list-departments-response.dto';
import { ListSectionsDto } from './dto/list-sections/list-sections.dto';
import { ListSectionsResponseDto } from './dto/list-sections/list-sections-response.dto';
import { ListFavoritesResponseDto } from './dto/list-favorites/list-favorites-response.dto';
import { ListEbayResponseDto } from './dto/list-ebay/list-ebay-response.dto';
import { ListCountriesDto } from './dto/list-countries/list-countries.dto';
import { ListCountriesResponseDto } from './dto/list-countries/list-countries-response.dto';
import { ListCategoriesDto } from './dto/list-categories/list-categories.dto';
import { ListCategoriesResponseDto } from './dto/list-categories/list-categories-response.dto';
import { ListStatesDto } from './dto/list-states/list-states.dto';
import { ListStatesResponseDto } from './dto/list-states/list-states-response.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('list')
  @ApiOperation({ summary: 'List products with optional filtering' })
  @ApiResponse({ status: 200, description: 'Return a list of products with pagination.', type: ListProductsResponseDto })
  listProducts(@Body() listProductsDto: ListProductsDto) {
    return this.productsService.listProducts(listProductsDto);
  }

  @Post('list-favorites')
  @ApiOperation({ summary: 'List favorite products with optional filtering' })
  @ApiResponse({ status: 200, description: 'Return a list of favorite products with pagination.', type: ListFavoritesResponseDto })
  listFavorites(@Body() dto: ListProductsDto) {
    return this.productsService.listFavorites(dto);
  }

  @Post('list-ebay')
  @ApiOperation({ summary: 'List eBay products with optional filtering' })
  @ApiResponse({ status: 200, description: 'Return a list of eBay products with pagination.', type: ListEbayResponseDto })
  listEbayProducts(@Body() dto: ListProductsDto) {
    return this.productsService.listEbayProducts(dto);
  }

  @Post('countries')
  @ApiOperation({ summary: 'List all available countries' })
  @ApiResponse({ status: 200, description: 'Return a list of countries with pagination.', type: ListCountriesResponseDto })
  listCountries(@Body() dto: ListCountriesDto) {
    return this.productsService.listCountries(dto);
  }

  @Post('critical-update')
  @ApiOperation({ summary: 'Get critical product updates (inventory, cost)' })
  @ApiResponse({ status: 200, description: 'Return a list of product updates with pagination.', type: CriticalUpdateResponseDto })
  criticalUpdateList(@Body() dto: CriticalUpdateListDto) {
    return this.productsService.criticalUpdateList(dto);
  }

  @Post('view')
  @ApiOperation({ summary: 'View detailed product information by TDID' })
  @ApiResponse({ status: 200, description: 'Return detailed product information.', type: ViewProductResponseDto })
  viewProduct(@Body() dto: ViewProductDto) {
    return this.productsService.viewProduct(dto);
  }

  @Post('quantity')
  @ApiOperation({ summary: 'Get available quantities for a list of TDIDs' })
  @ApiResponse({ status: 200, description: 'Return product quantities and costs.', type: ProductQuantityResponseDto })
  getProductQuantity(@Body() dto: ProductQuantityDto) {
    return this.productsService.getProductQuantity(dto);
  }

  @Post('departments')
  @ApiOperation({ summary: 'List all available product departments' })
  @ApiResponse({ status: 200, description: 'Return a list of departments with pagination.', type: ListDepartmentsResponseDto })
  listDepartments(@Body() dto: ListDepartmentsDto) {
    return this.productsService.listDepartments(dto);
  }

  @Post('sections')
  @ApiOperation({ summary: 'List all available product sections' })
  @ApiResponse({ status: 200, description: 'Return a list of sections with pagination.', type: ListSectionsResponseDto })
  listSections(@Body() dto: ListSectionsDto) {
    return this.productsService.listSections(dto);
  }

  @Post('categories')
  @ApiOperation({ summary: 'List all available product categories' })
  @ApiResponse({ status: 200, description: 'Return a list of categories with pagination.', type: ListCategoriesResponseDto })
  listCategories(@Body() dto: ListCategoriesDto) {
    return this.productsService.listCategories(dto);
  }

  @Post('states')
  @ApiOperation({ summary: 'List all available states for a country' })
  @ApiResponse({ status: 200, description: 'Return a list of states with pagination.', type: ListStatesResponseDto })
  listStates(@Body() dto: ListStatesDto) {
    return this.productsService.listStates(dto);
  }
}
