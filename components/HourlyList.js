import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";

export const HourlyList = ({hourlyWeather}) => {
  return (
    <>
      <div  style={{backgroundColor:"white",height:"300px", width:"80%", margin:"auto", borderRadius:'30px', padding:"10px"}}>
        <p className="font-bold pl-2">Weather</p>
                <div className="flex items-center justify-center flex-col border-r">
                  <div className="text-base font-normal ">
                    <p>
                      Temperature: {hourlyWeather.temp} <span>℃</span>
                    </p>
                    <p>
                      Feels like: {hourlyWeather.feels_like} <span>℃</span>
                    </p>
                    <p>
                      Temperature minimum: {hourlyWeather.temp_min} <span>℃</span>
                    </p>
                    <p>
                      Temperature maximum: {hourlyWeather.temp_max} <span>℃</span>
                    </p>
                    <p>
                      Humidity: {hourlyWeather.humidity} <span>℃</span>
                    </p>
                    <p>
                      Temperature: {hourlyWeather.temp} <span>℃</span>
                    </p>
                  </div>
                </div>

      </div>
    </>
  );
};
