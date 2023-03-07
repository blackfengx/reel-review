import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactPlayer from "react-player/youtube";
import DetailReviews from "./DetailReviews";

export default function Carousel(props) {
  let { trailer, posterPath, movie_id } = props;
  if (posterPath === undefined) {
    posterPath = null;
  }

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="mySwiper"
    >
      <SwiperSlide key={posterPath}>
        <div>
          <img
            src={
              posterPath !== null
                ? `https://image.tmdb.org/t/p/original/${posterPath}`
                : `https://cdn.discordapp.com/attachments/1072228028589019256/1080656211952808006/dariokun.png`
            }
            alt=""
            className="border-8 border-card"
            style={{
              display: "block",
              margin: "auto",
              minWidth: "300px",
              maxWidth: "700px",
              minHeight: "300px",
              maxHeight: "700px",
            }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide key={trailer}>
        <div className="h-full flex items-center justify-center mt-40">
          <ReactPlayer
            className="video"
            url={`https://www.youtube.com/embed/${trailer}`}
            width="720px"
            height="405px"
            margin="auto"
            pip={true}
            playing={false}
            loop={true}
            muted={false}
            controls={true}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide key={movie_id}>
        <div>
          <DetailReviews movie_id={movie_id} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
