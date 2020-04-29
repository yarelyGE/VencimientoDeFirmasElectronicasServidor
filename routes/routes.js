const express = require('express');
const router = express.Router();

const clients = require('../controllers/index');

router.get('/', clients.getClients);
/*router.post('/', client.createClient);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', client.deleteClient);*/

module.exports = router;