'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EventSchema = new mongoose.Schema({
  name:String,
	date:Date,
  location:String,
	userList:[String]
});

export default mongoose.model('Event', EventSchema);
