const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error0, connection) {

    if(error0)
        throw error0;

    connection.createChannel(function(error1, channel) {

        if(error1)
            throw error1;

        let x = 'direct_x';
        let severity = process.argv[2];
        let log = process.argv[3];

        channel.assertExchange(x, 'direct', {
            durable: false
        })

        channel.publish(x, severity, Buffer.from(log));

        console.log("[x] send %s", log);
    })

    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
})