import mongoose from 'mongoose';

export const ArtistaSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  pais : { type: String, required: true},
  anio_inicio_carrera : { type: Number, required: true},
  correo : { type: String, required: true},
});

ArtistaSchema.index({ correo: 1 }, { unique: true });
