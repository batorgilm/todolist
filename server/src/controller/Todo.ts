import { Request, Response } from 'express';
import { TodoModel } from '../model/Todo';

export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    return res.status(200).send({ success: true, todos });
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export const getOneTodo = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);
    const todo = await TodoModel.findById(req.params.id);
    return res.status(200).send({ success: true, todo });
  } catch (error) {
    return res
      .status(400)
      .send({ success: false, error: JSON.stringify(error) });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo = await TodoModel.create(req.body);
    console.log(todo);
    return res.status(201).send({ success: true, todo });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

export const getAllTodoByUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const todo = await TodoModel.find({ userId: id }).populate('userId');

    return res.status(201).send({ success: true, todo });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};
