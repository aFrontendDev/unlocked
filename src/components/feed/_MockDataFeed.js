import videoImgA from "../../_assets/images/video-screenshot-a.jpg";
import videoPosterA from "../../_assets/images/videoPosterA.jpg";
import mainImgA from "../../_assets/images/mainImgA.jpg";
import camila2 from "../../_assets/images/ashleigh.jpg";
import video1 from "../../_assets/videos/ashleigh_mov_1.mp4";
import video1Still from "../../_assets/images/ashleigh_mov_clip_1.jpg";
import ash1 from "../../_assets/images/ashleigh_1_comp.jpg";
import ash2 from "../../_assets/images/ashleigh_2_comp.jpg";

const feedData = [
  {
    id: '1',
    user: {
      name: "Camila2",
      img: camila2,
      location: "London"
    },
    mainMedia: {
      image: {
        large: {
          src: mainImgA
        },
        small: {
          src: mainImgA
        }
      }
    },
    thumbs: [
      {
        src: videoImgA,
        video: "dLI0lW6Of9k",
        poster: videoPosterA
      },
      {
        src: "https://placehold.it/100x100",
        video: null,
        poster: "https://placehold.it/850x450"
      },
      {
        src: "https://placehold.it/100x100",
        video: null,
        poster: "https://placehold.it/850x450"
      }
    ],
    likes: 264,
    title: "SMOKEY ROSE MAKEUP",
    desc: "Today's video is with a super feminine rosy smokey eye tutorial. This look works for several occasions, but definitely for night events. It's pink, it's soft, it's romantic - absolutely one of my favorite go-to looks. I really hope you like it!",
    tags: [
      {
        id: "eyeShadow",
        name: "eyeShadow"
      },
      {
        id: "makeup",
        name: "makeup"
      },
      {
        id: "beauty",
        name: "beauty"
      }
    ]
  },
  {
    id: '2',
    user: {
      name: "Ashleigh",
      img: ash1,
      location: "Manchester"
    },
    mainMedia: {
      video: {
        src: video1,
        poster: video1Still
      }
    },
    thumbs: [
      {
        src: ash1,
      },
      {
        src: ash2
      }
    ],
    likes: 495,
    title: "Makeup Tutorial",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ligula risus. Sed maximus purus quis turpis semper, eget accumsan nisi ultrices. Aenean porta urna lorem, vel interdum magna sodales in.",
    tags: [
      {
        id: "eyeShadow",
        name: "eyeShadow"
      },
      {
        id: "makeup",
        name: "makeup"
      },
      {
        id: "beauty",
        name: "beauty"
      }
    ]
  },
  {
    id: '3',
    user: {
      name: "Camila2",
      img: camila2,
      location: "London"
    },
    mainMedia: {
      image: {
        large: {
          src: mainImgA
        },
        small: {
          src: mainImgA
        }
      }
    },
    thumbs: [
      {
        src: videoImgA,
        video: "dLI0lW6Of9k",
        poster: videoPosterA
      },
      {
        src: "https://placehold.it/100x100",
        video: null,
        poster: "https://placehold.it/850x450"
      },
      {
        src: "https://placehold.it/100x100",
        video: null,
        poster: "https://placehold.it/850x450"
      }
    ],
    likes: 264,
    title: "SMOKEY ROSE MAKEUP",
    desc: "Today's video is with a super feminine rosy smokey eye tutorial. This look works for several occasions, but definitely for night events. It's pink, it's soft, it's romantic - absolutely one of my favorite go-to looks. I really hope you like it!",
    tags: [
      {
        id: "eyeShadow",
        name: "eyeShadow"
      },
      {
        id: "makeup",
        name: "makeup"
      },
      {
        id: "beauty",
        name: "beauty"
      }
    ]
  }
];

export default feedData;