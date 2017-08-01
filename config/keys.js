if (process.env.NODE_ENV === 'production') {
  //if we are running in production
  module.exports = require('./prod');
} else {
  //if we are running in dev
  module.exports = require('./dev');
}
