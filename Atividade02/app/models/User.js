import mongoose from 'mongoose';

  let schema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
  });

  export default mongoose.model('User', schema);
