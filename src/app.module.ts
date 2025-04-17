import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'db.sqlite',
      entities:[__dirname+'/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    UserModule,
    AuthModule
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AppModule {}
