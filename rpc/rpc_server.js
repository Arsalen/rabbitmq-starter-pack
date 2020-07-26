const fibonacci = require("./fibonacci");

const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error0, connection) {

    if(error0)
        throw error0;

    connection.createChannel(function(error1, channel) {

        if(error1)
            throw error1;

        let q = "rpc_queue";

        channel.assertQueue(q, {
            durable: false
        });

        channel.consume(q, function(msg) {

            let n = parseInt(msg.content);

            console.log("[x] receive %n", n);

            let result = fibonacci(n).toString();

            channel.sendToQueue(msg.properties.replyTo, Buffer.from(result), {
                correlationId: msg.properties.correlationId
            })
        }, {
            noAck: true
        })
    })
})