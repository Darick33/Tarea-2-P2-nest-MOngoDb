import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AlbunesDTO {
  @ApiProperty()  
  @IsNotEmpty()
  @IsString()
  titulo: string;
  @ApiProperty()  
  @IsNotEmpty()
  @IsNumber()
  anio_lanzamiento: string;
  @ApiProperty()  
  @IsNotEmpty()
  @IsString()
  discografia: string;
  @ApiProperty()  
  @IsNotEmpty()
  @IsString()
  genero: string;
}
