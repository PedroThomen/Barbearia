const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    servico: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pendente', 'confirmado', 'cancelado'],
        default: 'pendente'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema); 