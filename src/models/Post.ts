import { Schema, model } from "mongoose";

const PostSchema = new Schema(
{
    Paciente: { type: String, require: true}, 
    Tipo_cita: { type: String, require: true},
    Especialista : { type: String, require: true},
    Descripcion : { type: String, require: true},
    Fecha_cita : { type: Date, default: Date.now},
}, 
{
    versionKey: false, 
}
);

export default model('Post', PostSchema);