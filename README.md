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
node receive_logs.js publish_subscribe # [x] receive data
node receive_logs.js publish_subscribe > pub_sub.log
node emit_log.js publish_subscribe data
```

### routing

```bash
node receive_logs_direct.js info # [x] welcome to RabbitMQ starter-pack
node receive_logs_direct.js error > direct.log
node emit_log_direct.js info "welcome to RabbitMQ starter-pack"
node emit_log_direct.js error "ouups, something went wrong"
```

### rpc

```bash
node rpc_server.js > requests.log
node rpc_client.js 2 # [x] receive 1
node rpc_client.js 3 # [x] receive 2
```