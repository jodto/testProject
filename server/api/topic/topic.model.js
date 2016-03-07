'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TopicSchema = new mongoose.Schema({
  title:String,

  category:{
    type:mongoose.Schema.ObjectId,
    ref: 'category'
  },
  postedDate:String,
  amountOfPost:Number,/*,
  user:{
    type:mongoose.Schema.ObjectId,
    ref: 'User'
  }*/

  post:[{
    text:String,
    date:String/*,
    user:{
      type:mongoose.Schema.ObjectId,
      ref: 'User'
    }*/
  }]
});

export default mongoose.model('Topic', TopicSchema);
