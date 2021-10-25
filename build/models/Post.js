"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    Paciente: { type: String, require: true },
    Tipo_cita: { type: String, require: true },
    Especialista: { type: String, require: true },
    Descripcion: { type: String, require: true },
    Fecha_cita: { type: Date, default: Date.now },
}, {
    versionKey: false,
});
exports.default = (0, mongoose_1.model)('Post', PostSchema);
