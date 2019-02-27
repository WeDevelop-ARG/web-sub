# web-sub

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Simple WebSub client for Node.js. It provides `publish` and `subscribe` methods.

## Installation

Also, you'll need to install an adapter. For the moment the only available adapter is [web-sub-kafka-adapter](https://github.com/WeDevelop-ARG/web-sub-kafka-adapter).

This package could be extended to use any other apdater such as *RabbitMQ*, *SQS*, *ActiveMQ*, etc.

```
npm install --save @wedevelop/web-sub @wedevelop/web-sub-kafka-adapter
```

## Quick start

```
const WebSubClient = require('@wedevelop/web-sub')
const KafkaAdapter = require('@wedevelop/web-sub-kafka-adapter')

const topic = 'demo'
const webSubClient = new WebSubClient(new KafkaAdapter())

webSubClient.publish([{ topic, messages: [new Date()] }])
  .then(console.log)
  .catch(console.error)

webSubClient.subscribe(topic, (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})
```
