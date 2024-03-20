import mongoose from "mongoose";
export const AlbunesSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  anio_lanzamiento : { type: Number, required: true },
  discografia: { type: String, required: true },
  genero : { type: String, required: true },

  artistas: [{ type: mongoose.Schema.Types.ObjectId, ref: "artistas" }],
  
},
{
    timestamps: true,
    
}
);