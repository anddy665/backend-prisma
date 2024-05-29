import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Crear un nuevo coach
router.post('/', async (req, res) => {
  const { coach_name, email, phone_number } = req.body;
  try {
    const coach = await prisma.coach.create({
      data: { coach_name, email, phone_number },
    });
    res.json(coach);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener todos los coaches
router.get('/', async (req, res) => {
  try {
    const coaches = await prisma.coach.findMany();
    res.json(coaches);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener un coach por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const coach = await prisma.coach.findUnique({
      where: { coach_id: parseInt(id) },
    });
    res.json(coach);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

export default router;
