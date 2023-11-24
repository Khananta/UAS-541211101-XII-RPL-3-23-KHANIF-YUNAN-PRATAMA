const express = require('express')
const router = express.Router()
const ruangancontroller = require('../controllers/ruangan')
const ruangan = require('../controllers/ruangan')
      
router.get('/ruangans', ruangancontroller.index)

router.get('/ruangan/:id', ruangancontroller.show)

router.post('/ruangan', ruangancontroller.store)

router.put('/ruangan/:id', ruangancontroller.update)

router.delete('/ruangan/:id', ruangancontroller.delete)

module.exports = router