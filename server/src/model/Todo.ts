import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId, // object id type
    ref: 'User', // reference
  },

  priority: {
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW'],
  },
  label: String,
});

const TodoModel = mongoose.model('Todo', TodoSchema);

export { TodoModel };
