# rabbitmq-starter-pack
RabbitMQ starter pack from [getstarted](https://www.rabbitmq.com/getstarted.html)

## commands

Run each command on a separate terminals.

### hello_world

```bash
node receive.js hello_world
node send.js hello_world hello
```

### work_queues

commands

```bash
node worker_1.js work_queues
node worker_2.js work_queues
node new_task.js work_queues .
node new_task.js work_queues ..
```