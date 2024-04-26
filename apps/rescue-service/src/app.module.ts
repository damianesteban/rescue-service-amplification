import { RedisModule } from "./redis/redis.module";
import { Module } from "@nestjs/common";
import { OrderModule } from "./order/order.module";
import { CustomerModule } from "./customer/customer.module";
import { AddressModule } from "./address/address.module";
import { ProductModule } from "./product/product.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    OrderModule,
    CustomerModule,
    AddressModule,
    ProductModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
