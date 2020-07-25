# rabbitmq-starter-pack
RabbitMQ starter pack from [getstarted](https://www.rabbitmq.com/getstarted.html)

## commands

Run each command on a separate terminal.

### hello_world

```bash
node receive.js hello_world
node send.js hello_world hello
```

### work_queues

```bash
node worker_1.js work_queues
node worker_2.js work_queues
node new_task.js work_queues .
node new_task.js work_queues ..
```

### publish_subscribe

```bash
node receive_logs_1.js publish_subscribe
node receive_logs_2.js publish_subscribe > pub_sub.log
node emit_log.js publish_subscribe data
```