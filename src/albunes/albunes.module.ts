import { Module } from '@nestjs/common';
import { AlbunesService } from './albunes.service';
import { AlbunesController } from './albunes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ALBUNES } from 'src/models/models';
import { AlbunesSchema } from './schema/albunes.schema';
import { ArtistasModule } from 'src/artistas/artistas.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: ALBUNES.name,
      useFactory: () => AlbunesSchema.plugin(require('mongoose-autopopulate')),
    },
  ]),
  ArtistasModule,
  ],
  controllers: [AlbunesController],
  providers: [AlbunesService],
})
export class AlbunesModule {}
