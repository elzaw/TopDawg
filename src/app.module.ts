import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './helpers/logger.middleware';
import { ProductsModule } from './modules/products/products.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { CustomersModule } from './modules/customers/customers.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ShippingModule } from './modules/shipping/shipping.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ProductsModule, SubscriptionModule, CustomersModule, OrdersModule, ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
