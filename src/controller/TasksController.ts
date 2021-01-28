import { getRepository } from 'typeorm'
import { Tasks } from '../entity/Tasks'
import { Request, Response } from 'express'

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await getRepository(Tasks).find();
    return res.json(tasks);
}

export const saveTask = async (req: Request, res: Response) => {
    const task = await getRepository(Tasks).save(req.body);
    return res.json(task)
}

export const getTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).findOne(id);
    return res.json(task);
}

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).update(id, req.body);

    if (task.affected === 1) {
        const taskupdate = await getRepository(Tasks).findOne(id);
        return res.json(taskupdate);
    }

    return res.status(404).json({
        msg: "Não foi possível realizar a requisição"
    })
}