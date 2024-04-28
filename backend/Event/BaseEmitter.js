const EventEmitter = require('events');

class BaseEmitter extends EventEmitter {

  execute(asyncFunc, ...args) {
    this.emit('begin');
    console.time('execute');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('data', data);
      console.timeEnd('execute');

    });
    this.emit('end');
  }
  
  async executeAsync(asyncFunc, ...args) {
    this.emit('begin');
    try {
      console.time('execute');
      const data = await asyncFunc(...args);
      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    } catch(err) {
      this.emit('error', err);
    }
  }
}
/*
const withTime = new BaseEmitter();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

//withTime.execute(fs.readFile, __filename);
*/
module.exports = {
    BaseEmitter: BaseEmitter,
}