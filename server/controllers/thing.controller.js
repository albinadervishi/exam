const Thing = require('../model/thing.model');


module.exports.findAllThings = (req, res) => {
    Thing.find() 
         .then((allThings) =>{
            res.json({things: allThings })
         })
         .catch ((err) => {
         res.json({ message: "Something went wrong", error: err})
         });
}

module.exports.createThing = (request, response) => {
   console.log(request)
   const newThing = new Thing({
      name: request.body.name,
      likes: 0
    });

    newThing
      .save()
       .then((things) => {
         response.json(things);
       })
      .catch((err) => response.json(err));
}

module.exports.getThing = (request, response) => {
   Thing.findOne({_id:request.params.id})
       .then(thing => response.json(thing))
       .catch(err => response.json(err));
}

module.exports.updateThing = (request, response) => {
   Thing.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
       .then(updatedThing => response.json(updatedThing))
       .catch(err => response.json(err))
}

module.exports.deleteThing = (request, response) => {
    Thing.deleteOne({ _id: request.params.id }) 
       .then(deleteConfirmation => response.json(deleteConfirmation))
       .catch(err => response.json(err))
}

module.exports.updateLikes = (request, response) => {
   Thing.findOneAndUpdate({ _id: request.params.id }, { $inc: { likes: 1 } }, { new: true })
     .then((updatedThing) => {
       response.json(updatedThing);
     })
     .catch((err) => response.json(err));
 };

 module.exports.resetLikes = (request, response) => {
   Thing.findOneAndUpdate({ _id: request.params.id }, { $set: { likes: 0 }}, { new: true })
     .then((updatedThing) => {
       response.json(updatedThing);
     })
     .catch((err) => response.json(err));
 };