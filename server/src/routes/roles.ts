import { Router, Request, Response } from 'express';
import { Role } from '../models/Role';

export const rolesRouter = Router();

// Get all roles
rolesRouter.get('/', async (req: Request, res: Response) => {
  const roles = await Role.find();
  res.json(roles);
});

// Get a single role by ID
rolesRouter.get('/:id', async (req: Request, res: Response) => {
  const role = await Role.findById(req.params.id);
  if (role) {
    res.json(role);
  } else {
    res.status(404).send('Role not found');
  }
});

// Add a new role
rolesRouter.post('/', async (req: Request, res: Response) => {
  const { roleName, status } = req.body;
  const newRole = new Role({
    roleName,
    status,
  });
  await newRole.save();
  res.status(201).json(newRole);
});

// Update a role
rolesRouter.put('/:id', async (req: Request, res: Response) => {
  const { roleName, status } = req.body;
  const role = await Role.findByIdAndUpdate(
    req.params.id,
    { roleName, status },
    { new: true }
  );
  if (role) {
    res.json(role);
  } else {
    res.status(404).send('Role not found');
  }
});

// Delete a role
rolesRouter.delete('/:id', async (req: Request, res: Response) => {
  const role = await Role.findByIdAndDelete(req.params.id);
  if (role) {
    res.status(204).send();
  } else {
    res.status(404).send('Role not found');
  }
});
