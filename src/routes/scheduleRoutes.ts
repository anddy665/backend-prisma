import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Crear un nuevo horario
router.post('/', async (req, res) => {
  const { coach_id, topic_id, schedule_time, schedule_day, schedule_location } = req.body;
  try {
    const schedule = await prisma.schedule.create({
      data: { coach_id, topic_id, schedule_time, schedule_day, schedule_location },
    });
    res.json(schedule);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener todos los horarios
router.get('/', async (req, res) => {
  try {
    const schedules = await prisma.schedule.findMany();
    res.json(schedules);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener un horario por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await prisma.schedule.findUnique({
      where: { schedule_id: parseInt(id) },
    });
    res.json(schedule);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

export default router;
