import React from "react";
import axios from "axios";
import Card from "../components/Card";
import { TiWeatherWindy, TiWeatherSunny } from "react-icons/ti";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";

export default function Nottingham({ temp, windspeed, city }) {
  const router = useRouter();
  const cityName = router.query.city;

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="flex flex-row items-start justify-center">
          <h1 className="text-4xl font-semibold p-9 text-white hover:text-purple-700" onClick={() => router.back()}>
            {<BiArrowBack />}
          </h1>
          <h1 className="text-4xl font-semibold p-9 text-white">{cityName}</h1>
        </div>
        <div className="text-4xl font-semibold p-9 text-white flex flex-row justify-center gap-8">
          <Card
            icon={<TiWeatherWindy />}
            header={"Wind Speed"}
            body={`${windspeed} MPH`}
          />
          <Card
            icon={<TiWeatherSunny />}
            header={"Temperature"}
            body={`${temp} °C`}
          />
        </div>
      </div>
    </>
  );
}

Nottingham.getInitialProps = async ({ query }) => {
  const city = query.city;

  try {
    const res = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=CMMQ6HV9ERF7GSVWG44P5DWMQ&contentType=json`
    );
    console.log("res.status", res.status);
    const temp = res.data.currentConditions.temp;
    const windspeed = res.data.currentConditions.windspeed;
    return { temp, windspeed, city };
  } catch (e) {
    console.log("e.message", e.message);
    console.log("e. status", e.response.status);
    return {
      notFount: true,
    };
  }
};
