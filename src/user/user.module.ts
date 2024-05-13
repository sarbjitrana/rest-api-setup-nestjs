import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: 'dsfsdfasdsdfasdfas', // Replace with your actual secret key
    signOptions: { expiresIn: '1h' }, // Adjust expiry as needed
  }),
  TypeOrmModule.forFeature([User])
],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
