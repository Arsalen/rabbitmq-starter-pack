const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error0, connection) {

    if(error0)
        throw error0;

    connection.createChannel(function(error1, channel) {

        if(error1)
            throw error1;

        let q = process.argv[2];
        let msg = process.argv[3];

        // channel.deleteQueue(q);

        channel.assertQueue(q, {
            durable: false
        });

        channel.sendToQueue(q, Buffer.from(msg));

        console.log("[x] send %x", msg);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500)
})