import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Crear un nuevo tema
router.post('/', async (req, res) => {
  const { topic_name, description, duration, course_id } = req.body;
  try {
    const topic = await prisma.topic.create({
      data: { topic_name, description, duration, course_id },
    });
    res.json(topic);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener todos los temas
router.get('/', async (req, res) => {
  try {
    const topics = await prisma.topic.findMany();
    res.json(topics);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener un tema por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const topic = await prisma.topic.findUnique({
      where: { topic_id: parseInt(id) },
    });
    res.json(topic);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

export default router;
