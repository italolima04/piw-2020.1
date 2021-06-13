import mongoose from 'mongoose';

  let schema = mongoose.Schema({
    content: {type: String, required: true},
    likes: {type: Number, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
  });

  export default mongoose.model('Post', schema);

