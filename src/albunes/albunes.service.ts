import { HttpStatus, Injectable } from '@nestjs/common';
import { IAlbunes } from './albunes.interface';
import { AlbunesDTO } from './dto/albun.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ALBUNES } from 'src/models/models';
import { Model } from 'mongoose';

@Injectable()
export class AlbunesService {
    constructor(
        @InjectModel(ALBUNES.name) private readonly model: Model<IAlbunes>,
    ){}
    insertar( albunDTO: AlbunesDTO): Promise<IAlbunes>{
        const nuevoAlbun = new this.model(albunDTO);
        return nuevoAlbun.save();
    }
    todos(): Promise<IAlbunes[]>{
        return this.model.find().populate('artistas');
    }
    uno(id: string): Promise<IAlbunes>{
        return this.model.findById(id).populate('artistas');
    }
    actualizar(id: string, albunDTO: AlbunesDTO): Promise<IAlbunes>{
        return this.model.findByIdAndUpdate(id, albunDTO, {new: true});
    }
    async eliminar(id: string){
        await this.model.findByIdAndDelete(id);
        return { status : HttpStatus.OK,
        msg: 'Eliminado'};
    }
    async insertarArtista(albunId: string, artistaId: string,): Promise<IAlbunes>{
        return await this.model.findByIdAndUpdate(albunId, {$addToSet: {artistas: artistaId}}, {new: true})
        .populate('artistas');
       
    }

}
