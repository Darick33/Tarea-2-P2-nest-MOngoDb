import { HttpStatus, Injectable } from '@nestjs/common';
import { IArtistas } from './artistas.interface';
import { ArtistasDTO } from './dto/artista.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ARTISTA } from 'src/models/models';
import { Model } from 'mongoose';

@Injectable()
export class ArtistasService {
    constructor(
        @InjectModel(ARTISTA.name)
        private readonly model: Model<IArtistas> 
    ) {}
        
    async insertar(artistaDTO: ArtistasDTO): Promise<IArtistas> {
        const nuevoArtista = new this.model(artistaDTO);
        return await nuevoArtista.save();
    }
    async todos(): Promise<IArtistas[]> {
        return await this.model.find();
    }
    async uno(id: string): Promise<IArtistas> {
        return await this.model.findById(id);
    }
    async actualizar(id: string, artistaDTO: ArtistasDTO): Promise<IArtistas> {
        return await this.model.findByIdAndUpdate(id, artistaDTO, { new: true });
    }
    async eliminar(id: string) {
        await this.model.findByIdAndDelete(id);
        return { status: HttpStatus.OK,
            mensaje: 'Artista eliminado'
        };
    }
}
