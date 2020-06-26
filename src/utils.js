import { artists } from "./artistData";

const findArtist = (city) => {
  for (let i in artists) {
    if (artists[i].city === city) {
      return i;
    }
  }
};

export { findArtist };
