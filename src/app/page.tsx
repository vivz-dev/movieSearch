import MainMovie from "./components/main/MainMovie";
import MovieGrid from "./components/main/MovieGrid";

export default function Home() {
  return (
   <div className="bg-black">
    <MainMovie/>
    <MovieGrid/>
   </div>
  );
}
