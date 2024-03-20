import { IArtistas } from "src/artistas/artistas.interface";

export interface IAlbunes extends Document {
    titulo:string;
    anio_lanzamiento:string;
    discografia:string;
    genero:string
    artistas : IArtistas[];
}
