import mongoose from 'mongoose';

  let schema = mongoose.Schema({
    text: {type: String, required: true},
    post_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Post'},
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
  });

  export default mongoose.model('Comment', schema);

