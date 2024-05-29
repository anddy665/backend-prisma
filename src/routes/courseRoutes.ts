import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Crear un nuevo curso
router.post('/', async (req, res) => {
  const { course_name, description, start_date, end_date } = req.body;
  try {
    const course = await prisma.course.create({
      data: { 
        course_name, 
        description, 
        start_date: new Date(start_date), 
        end_date: new Date(end_date) },
    });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener todos los cursos
router.get('/', async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

// Obtener un curso por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const course = await prisma.course.findUnique({
      where: { course_id: parseInt(id) },
    });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

export default router;
