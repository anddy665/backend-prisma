import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import coachRoutes from './routes/coachRoutes';
import courseRoutes from './routes/courseRoutes';
import scheduleRoutes from './routes/scheduleRoutes';
import topicRoutes from './routes/topicRoutes';

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.use('/api/coaches', coachRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/topics', topicRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
