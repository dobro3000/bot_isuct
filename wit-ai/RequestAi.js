var WITMODEL = require('../ParseData/WitModel');

    const {Wit, log} = require('node-wit');

    const client = new Wit({
      accessToken: '',
      logger: new log.Logger(log.DEBUG) // optional
    });


  function sendWit(d){
    client.message(d, {})
    .then((data) => {
        // console.log('Yay, got Wit.ai response: ' + JSON.stringify(data.entities));
        // msg.send(SON.stringify(data.entities)+"");
        witModel = new WITMODEL(data.entities);
       console.log(witModel.getQuery());  
    })
    .catch(console.error);
  }

module.exports = {
  sendWit: sendWit
};