const mongoose = require('mongoose')

const RuanganSchema = new mongoose.Schema({
    nama_ruangan: {
        type: String,
        required: [true, 'Masukan nama ruangan'],
        unique: true
    },
    kapasitas: {
        type: String,
        required: [true, 'Masukan kapasitas ruangan'],
    },
    tipe_ruangan: {
        type: String,
        required: [true, 'Masukan tipe ruangan'],
    },
    kondisi_ruangan: {
        type: String,
        required: [true, 'Masukan kondisi ruangan'],
    },
    status: {
        type: String,
        required: [true, 'Status ruangan (Digunakan atau tidak)'],
    },
})

module.exports = mongoose.model('Ruangan', RuanganSchema)