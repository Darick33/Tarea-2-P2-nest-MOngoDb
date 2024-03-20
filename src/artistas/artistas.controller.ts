import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArtistasDTO } from './dto/artista.dto';
import { ArtistasService } from './artistas.service';
import { IArtistas } from './artistas.interface';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('artistas')
@Controller('api/v1/artistas')
export class ArtistasController {
    constructor(private artistasServicio:ArtistasService){}

    @Post()
   
    insertar(@Body()artistaDTO: ArtistasDTO){
        return this.artistasServicio.insertar(artistaDTO);
    }
    @Get()
    todos(){
        return this.artistasServicio.todos();
    }

    @Get(':id')
    uno(@Param('id')id: string){
        return this.artistasServicio.uno(id); 
    }
    @Put(':id')
    actualizat(@Param('id') id:string, @Body() artista: ArtistasDTO){
        return this.artistasServicio.actualizar(id,artista);
    }
    @Delete(':id')
    eliminar(@Param ('id') id:string){
        return this.artistasServicio.eliminar(id);
    }

}
