const ThingController = require('../controllers/thing.controller');  

module.exports = (app) => {
    app.get('/api/thing', ThingController.findAllThings);
    app.post('/api/thing', ThingController.createThing);
    app.get('/api/thing/:id', ThingController.getThing);
    app.patch('/api/thing/:id', ThingController.updateThing);
    app.post('/api/thing/:id', ThingController.updateLikes);
    app.put('/api/thing/:id', ThingController.resetLikes);
    app.delete('/api/thing/:id', ThingController.deleteThing);
}

