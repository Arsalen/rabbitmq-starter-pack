const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error0, connection) {

    if(error0)
        throw error0;

    connection.createChannel(function(error1, channel) {

        if(error1)
            error1;

        let q = process.argv[2];

        channel.assertQueue(q, {
            durable: true
        });

        channel.prefetch(1);

        channel.consume(q, function(msg) {
            
            let secs = msg.content.toString().split('.').length -1;

            console.log("[x] receive %s", msg.content);

            setTimeout(function() {

                console.log("[x] Done");
                channel.ack(msg);
            }, secs * 1000)
        }, {
            noAck: false
        })
    })
})