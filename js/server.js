const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/api/posts', (req, res) => {
  
  const { local, periodo, data } = req.query;

  

  const posts = [
    {
      id: 1,
      local: 'Local 1',
      data: '2023-06-11',
      horario: '10:00',
      detalhes: 'Detalhes do Post 1',
    },
    {
      id: 2,
      local: 'Local 2',
      data: '2023-06-12',
      horario: '15:30',
      detalhes: 'Detalhes do Post 2',
    },
    
  ];

  
  const filteredPosts = posts.filter(post => {
    if (local && !post.local.toLowerCase().includes(local.toLowerCase())) {
      return false;
    }
    if (periodo && post.periodo !== periodo) {
      return false;
    }
    if (data && post.data !== data) {
      return false;
    }
    return true;
  });

  
  res.json(filteredPosts);
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('API fictícia iniciada na porta 3000');
});