const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');
client.on('connect', () => {
  console.log('MQTT simulator connected');
  setInterval(()=>{
    const payload = JSON.stringify({deviceId: 'dev-001', ts: Date.now(), temp: (20+Math.random()*10).toFixed(2)});
    client.publish('smarttrack/devices/dev-001', payload);
    console.log('published', payload);
  }, 5000);
});
