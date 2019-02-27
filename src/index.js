export default class WebSubClient {
  constructor (webSubClientAdapter) {
    this.client = webSubClientAdapter
  }

  /**
   * Publish one or more messages.
   *
   * @param {Object[]} payloads
   * @param {String}   payloads[].topic
   * @param {String[]} payloads[].messages
   *
   * @return {Promise}
   */
  publish (payloads, options) {
    return this.client.publish(payloads, options)
  }

  /**
   * Subscribe to one or more topics.
   *
   * @param {String[]} topics
   * @param {Function} callback
   */
  subscribe (topics, callback) {
    this.client.subscribe(topics, callback)
  }
}
