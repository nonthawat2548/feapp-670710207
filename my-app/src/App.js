import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';

import './App.css';

const members = [
  {
    id: 1, name: 'นลธวัช ปฐมชัยคุปต์', nickname: 'นล',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว']
  },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
  {
    id: 2, name: 'รวมพล จิโนต๋า', nickname: 'ต่อ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['กาแฟ', 'หมา']
  },
  {
    id: 3, name: 'สิรวิชญ์ บุญญาธิ', nickname: 'ฟิมล์',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['น้ำผลไม้', 'นก']
  },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;




