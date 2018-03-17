
var REQUEST_AI = require('../wit-ai/RequestAi');

var VK  = require("VK-Promise"),
    vk = new VK("");
    vk.longpoll.start();

    vk.on("message", function (event, msg) { // Обрабатываем сообщения
        
        if(msg.body != "") // Если текст сообщения равен ping
        {
             console.log(msg.body);
            // msg.send(""+ JSON.stringify(msg.body)); // Отвечаем pong
            // msg.send('Yay, got Wit.ai response: ' + JSON.stringify(data.entities)); // Отвечаем pong
            // request_ai = new REQUEST_AI();
            REQUEST_AI.sendWit(msg.body);
            console.log(">>>>"+msg.body);
            // msg.send(msg.body);    
        }
            
});
