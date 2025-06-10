const express = require('express'); 
const app = express();
const port = 3000;

const musicList = [
  'https://www.youtube.com/watch?v=BzYnNdJhZQw&list=PL-2aeEJY7wBe0hA3e93eqNRHi2LfJ511q',
  'https://www.youtube.com/watch?v=IFLPglxCnjg',
  'https://www.youtube.com/watch?v=DS9UruwQf4E',
  'https://www.youtube.com/watch?v=TV-U45a4Auk',
  'https://www.youtube.com/watch?v=SfeaTW4bcAw',
  'https://www.youtube.com/watch?v=NzNntz-YA0U',
  'https://www.youtube.com/watch?v=fn4JAuCfHQA',
  'https://www.youtube.com/watch?v=5-rbSNzU_b8',
  'https://www.youtube.com/watch?v=Aq_gsctWHtQ',
  'https://www.youtube.com/watch?v=3V-WYe159hw',
  'https://www.youtube.com/watch?v=kMax_66kx-4',
  'https://www.youtube.com/watch?v=ENjrJ_zyeUc',
  'https://www.youtube.com/watch?v=aH4uG8VgDqg',
  'https://www.youtube.com/watch?v=2v7djBZFrfE',
  'https://www.youtube.com/watch?v=GPbG4mIgKAw',
  'https://www.youtube.com/watch?v=SwXseZSjLsw',
  'https://www.youtube.com/watch?v=UHIPp9A6a_A',
  'https://www.youtube.com/watch?v=pKE7NJGxyDI',
  'https://www.youtube.com/watch?v=gMXXVS6Hil4',
  'https://www.youtube.com/watch?v=m3DZsBw5bnE'
];

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * musicList.length);
  const randomSong = musicList[randomIndex];
  res.redirect(randomSong);
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});
