import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE != undefined ? "nestjsDB" : process.env.DATABASE,
      port: 3306,
      username: 'root',
      password: 'Pro2711,.',
      database: 'social_setting_nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
