const cuid = require('cuid');

const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error0, connection) {

    if(error0)
        throw error0;

    connection.createChannel(function(error1, channel) {

        if(error1)
            throw error1;

        let server = "rpc_queue";
        let n = process.argv[2];

        channel.assertQueue('', {
            durable: false
        }, function(error2, q) {

                if(error2)
                    throw error2;

                channel.consume(q.queue, function(msg) {

                    console.log("[x] receive %s", msg.content);
                    connection.close();
                    process.exit(0);
                }, {
                    noAck: false
                })

                channel.sendToQueue(server, Buffer.from(n), {
                    correlationId: cuid(),
                    replyTo: q.queue
                })
        })
    })
})