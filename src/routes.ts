import { Router } from 'express';
import { getTasks, saveTask, getTask, updateTask } from './controller/TasksController'

const routes = Router();

routes.get('/', (req, res,) => {
    return res.json({
        msg: "hello word"
    })
})

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.put('/tasks/:id', updateTask);

export default routes;
