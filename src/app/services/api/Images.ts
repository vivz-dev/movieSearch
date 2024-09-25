import { IMG_BASE_URL } from "@/app/config/apiConfig";

// imageSizes.ts
export const IMAGE_SIZES = {
    backdrop: {
      small: "w300",
      medium: "w780",
      large: "w1280",
      original: "original",
    },
    logo: {
      xsmall: "w45",
      small: "w92",
      medium: "w154",
      large: "w185",
      xlarge: "w300",
      xxlarge: "w500",
      original: "original",
    },
    poster: {
      xsmall: "w92",
      small: "w154",
      medium: "w185",
      large: "w342",
      xlarge: "w500",
      xxlarge: "w780",
      original: "original",
    },
    profile: {
      xsmall: "w45",
      small: "w185",
      medium: "h632",
      original: "original",
    },
    still: {
      xsmall: "w92",
      small: "w185",
      medium: "w300",
      original: "original",
    },
  };  

  const getImageUrl = (path: string, size: string) => {
    return `${IMG_BASE_URL}${size}${path}`;
  };

  export const backdropUrl = (path: string, size: string) => {
    return getImageUrl(path, size);
  };
  
  export const logoUrl = (path: string, size: string) => {
    return getImageUrl(path, size);
  };
  
  export const posterUrl = (path: string, size: string) => {
    return getImageUrl(path, size);
  };

