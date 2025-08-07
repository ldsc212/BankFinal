import { Module } from '@nestjs/common';
import { TransferModule } from './transfer/transfer.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { envs } from './config/envs';


@Module({
  imports: [TransferModule, UsersModule, SequelizeModule.forRoot({
    dialect: 'postgres',
    host: envs.DATABASE_HOST,
    port: envs.DATABASE_PORT,
    username: envs.DATABASE_USERNAME,
    password: envs.DATABASE_PASSWORD,
    database: envs.DATABASE_NAME,
    autoLoadModels: true,
    synchronize: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // This should be set to true in production with a valid certificate
      },
    }
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
