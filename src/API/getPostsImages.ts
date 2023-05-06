/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { createClient } from "pexels";

const client = createClient("W0ZV2DFbg9oPuokW3fnNmkbrnRbN8RoVBzgdTyn7AQUHasgIcKcBWc6B");

// interface Photos {
//   page: number;
//   per_page: number;
//   photos: [
//     {
//       id: number;
//       width: number;
//       height: number;
//       url: string;
//       photographer: string;
//       photographer_url: string;
//       photographer_id: number;
//       avg_color: string;
//       src: {
//         original: string;
//         large2x: string;
//         large: string;
//         medium: string;
//         small: string;
//         portrait: string;
//         landscape: string;
//         tiny: string;
//       };
//       liked: boolean;
//       alt: string;
//     }
//   ];
//   next_page: string;
// }

export async function getPostsImages() {
  return client.photos.curated({ per_page: 30 }).then((photos) => photos);
}
