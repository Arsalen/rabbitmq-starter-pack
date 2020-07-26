const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error0, connection) {

    if(error0)
        throw error0;

    connection.createChannel(function(error1, channel) {

        if(error1)
            throw error1;

        let x = 'direct_x';
        let severity = process.argv[2];

        channel.assertExchange(x, 'direct', {
            durable: false
        })

        channel.assertQueue('', {
            exclusive: true
        }, function(error2, q) {

            if(error2)
                throw error2;

            channel.bindQueue(q.queue, x, severity);

            channel.consume(q.queue, function(log) {
                
                console.log("[x] receive %s", log.content);
            }, {
                noAck: true
            })
        })
    })
})