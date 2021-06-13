import mongoose from 'mongoose'
export default function(uri){
  mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.connection.on('connected', function() {
    console.log(`Mongoose on! Connected in ${uri}`)
  })

  mongoose.connection.on('disconnected', function() {
    console.log(`Mongoose off! Disconnected off ${uri}`)
  })

  mongoose.connection.on('error', function(error) {
    console.log(`Mongoose off! Error in the connection ${error}`)
  })

  mongoose.set('debug', true);
}