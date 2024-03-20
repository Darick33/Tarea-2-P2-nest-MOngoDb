import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistasModule } from './artistas/artistas.module';
import { AlbunesModule } from './albunes/albunes.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development', isGlobal: true,
      
    }),
   MongooseModule.forRoot(
    process.env.uri_mongo),
    ArtistasModule,
    AlbunesModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
