//import React from "react";
//import { link } from "react-router-dom";
import { movies } from "../data/data.js";
import MovieCard from "../Component/MovieCard.jsx";
import MovieGallery from "../Component/MovieGallery.jsx";


function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <div className="mi-8 text-2xl font-bold text-slate-800">🎬 หนังแนะนำ</div>
      <div className="mx-auto mt-8 max-w-5xl">
        {movies.slice(0, 3).map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
            />
          );
        })}
      </div>
      <h2 className="mt-8 text-2xl font-bold text-slate-800">📽️ ดูหนังเพิ่มเติม</h2>
      <div className="mx-auto mt-8 max-m-5xl">
        <MovieGallery />
      </div>
    </div>
  );
}

export default Home;