const { status } = require('server/reply')
const Ruangan = require('../models/Ruangan')
const { raw } = require('express')

module.exports = {
    index: async (req, res) => {
        try {
            const ruangans = await Ruangan.find()
            if (ruangans.length > 0) {
                res.status(200).json({
                    status: true,
                    data: ruangans,
                    method: req.method,
                    url: req.url
                })  
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    show: async (req, res) => {
        try {
            const ruangan = await Ruangan.findById(req.params.id)
            res.json({
                status: true,
                data: ruangan,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditampilkan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    store: async (req, res) => {
        try {
            const ruangan = await Ruangan.create(req.body)
            res.status(200).json({
                status: true,
                data: ruangan,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    update: async (req, res) => {
        try {
            const ruangan = await Ruangan.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: ruangan,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    delete: async (req, res) => {
        try {
            await Ruangan.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
        const id = req.params.id
        ruangans = ruangans.filter(ruangan => ruangan.id != id)
    },

}