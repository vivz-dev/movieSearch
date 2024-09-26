import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const router = useRouter();
  const { movieId } = router.query; // Obtener el ID de la película desde la URL
  const [movie, setMovie] = useState<any>(null); // Estado para almacenar los datos de la película

  useEffect(() => {
    if (movieId) {
      // Simular una llamada para obtener los datos de la película
      const fetchedMovie = {
        id: movieId,
        title: 'Película de ejemplo',
        description: 'Descripción de la película de ejemplo...',
      };
      setMovie(fetchedMovie);
    }
  }, [movieId]);

  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-4">{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
