import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AlbunesService } from './albunes.service';
import { AlbunesDTO } from './dto/albun.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ArtistasService } from 'src/artistas/artistas.service';
@ApiTags('albunes')

@Controller('api/v1/albunes')
export class AlbunesController {
    constructor(private albunesServicio:AlbunesService,
    private readonly artistasServicio: ArtistasService,    ){}
    @Post()
    @ApiOperation({summary:'Crear un albun'})
    insertar(@Body()albunDTO: AlbunesDTO){
        return this.albunesServicio.insertar(albunDTO);
    }
    @ApiOperation({summary:'Selecciona todos los albunes'})
    @Get()
    todos(){
        return this.albunesServicio.todos();
    }
    @Get(':id')
    uno(@Param('id')id: string){
        return this.albunesServicio.uno(id); 
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() albunDTO: AlbunesDTO){
        return this.albunesServicio.actualizar(id,albunDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.albunesServicio.eliminar(id);
    }
    @Post(':albunId/artistas/:artistaId')
    async agregarArtista(@Param('albunId') albunId: string, @Param('artistaId') artistaId: string) {
        const artista = await this.artistasServicio.uno(artistaId);
        if (!artista) 
          throw new HttpException('Artista no encontrado', HttpStatus.NOT_FOUND);
        
        return this.albunesServicio.insertarArtista(albunId, artistaId);
    }


}
