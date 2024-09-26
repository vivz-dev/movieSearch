import MainMovie from "./components/main/MainMovie";
import MovieGrid from "./components/main/MovieGrid";
import NavBar from "./components/main/NavBar";

export default function Home() {
  return (
    <>
    <div className="bg-black relative">
    <NavBar></NavBar>
      <MainMovie />
      <div className="relative overflow-y-auto">
      
        <MovieGrid />
      </div>
    </div>
    </>
   
  );
}
