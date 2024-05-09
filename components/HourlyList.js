import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";

export const HourlyList = ({hourlyWeather}) => {
  return (
    <>
      <div className="pd-4" style={{backgroundColor:"white",height:"300px", width:"40%", margin:"auto", marginTop:'100px', borderRadius:'30px', padding:"10px"}}>
        <p className="font-bold pl-2 mb-6">Weather</p>
                <div className="flex items-center justify-center flex-col border-r">
                  <div className="text-base font-normal ">
                    <p>
                      <b>Temperature:</b> {hourlyWeather.temp} <span>℃</span>
                    </p>
                    <p>
                    <b>Feels like:</b> {hourlyWeather.feels_like} <span>℃</span>
                    </p>
                    <p>
                    <b>Temperature minimum:</b> {hourlyWeather.temp_min} <span>℃</span>
                    </p>
                    <p>
                    <b>Temperature maximum:</b> {hourlyWeather.temp_max} <span>℃</span>
                    </p>
                    <p>
                    <b>Humidity:</b> {hourlyWeather.humidity} <span>℃</span>
                    </p>
                    <p>
                      <b>Temperature:</b> {hourlyWeather.temp} <span>℃</span>
                    </p>
                  </div>
                </div>

      </div>
    </>
  );
};
