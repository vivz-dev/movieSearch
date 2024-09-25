import MainMovie from "./components/main/MainMovie";
import MovieGrid from "./components/main/MovieGrid";

export default function Home() {
  return (
    <div className="bg-black relative">
    <MainMovie />
    <div className="relative">
      <MovieGrid />
    </div>
  </div>
  );
}
