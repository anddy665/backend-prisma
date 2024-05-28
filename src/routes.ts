import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Crear un nuevo usuario
router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Crear una nueva nota para un usuario
router.post('/users/:userId/notes', async (req, res) => {
  const { userId } = req.params;
  const { title, content } = req.body;
  try {
    const note = await prisma.note.create({
      data: {
        title,
        content,
        userId: Number(userId),
      },
    });
    res.json(note);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener todas las notas de un usuario
router.get('/users/:userId/notes', async (req, res) => {
  const { userId } = req.params;
  try {
    const notes = await prisma.note.findMany({
      where: { userId: Number(userId) },
    });
    res.json(notes);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

export default router;
