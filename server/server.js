const express = require('express');
const cors = require('cors')   
const app = express();
app.use(cors())   
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
require('./routes/thing.routes')(app);

const AllMyThingRoutes = require("./routes/thing.routes");
AllMyThingRoutes(app);
require('./config/mongoose.config');  
require('./routes/thing.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );