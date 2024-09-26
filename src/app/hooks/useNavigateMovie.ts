import { useRouter } from 'next/router';

const useNavigateToMovie = () => {
  const router = useRouter();

  const goToMovie = (movieId: string) => {
    router.push(`/movie/${movieId}`);
  };

  return { goToMovie };
};

export default useNavigateToMovie;
