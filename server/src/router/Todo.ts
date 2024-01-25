import express from 'express';
import {
  createTodo,
  getAllTodo,
  getAllTodoByUserId,
  getOneTodo,
} from '../controller/Todo';
import { checkToken } from '../middleware/auth';

const todo = express.Router();

todo.route('/').get(checkToken, getAllTodo).post(createTodo);
todo.route('/:id').get(getOneTodo);
todo.route('/user/:id').get(getAllTodoByUserId);

export { todo };
