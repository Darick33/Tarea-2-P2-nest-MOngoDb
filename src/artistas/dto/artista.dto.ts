import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ArtistasDTO {

@ApiProperty()
@IsNotEmpty()
@IsString()        
nombre: string;
@IsNotEmpty()
@IsString()
genero: string;
@ApiProperty()
@IsNotEmpty()
@IsString()
pais: string;
@ApiProperty()
@IsNotEmpty()
@IsNumber()
anio_inicio_carrera: number;
@ApiProperty()
@IsNotEmpty()
@IsEmail()
correo: string;
}