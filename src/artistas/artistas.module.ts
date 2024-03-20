import { Module } from '@nestjs/common';
import { ArtistasService } from './artistas.service';
import { ArtistasController } from './artistas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ARTISTA } from 'src/models/models';
import { ArtistaSchema } from './schema/artista.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ARTISTA.name,
        useFactory: () => ArtistaSchema,
        },
    ]),
  ],
    // , 'Artistas'
    // , 'Artistas'])
  controllers: [ArtistasController],
  providers: [ArtistasService],
  exports: [ArtistasService],
})
export class ArtistasModule {}
