import express from 'express';

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});

app.use((err, req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
