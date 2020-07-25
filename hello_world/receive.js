const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error0, connection) {

    if(error0)
        throw error0;

    connection.createChannel(function(error1, channel) {

        if(error1)
            throw error1;

        let q = process.argv[2];

        channel.assertQueue(q, {
            durable: false
        });

        channel.consume(q, function(msg) {
            console.log("[x] receive %s", msg.content);
        }, {
            noAck: true
        })
        
    })
})