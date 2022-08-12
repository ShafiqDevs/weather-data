import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SquareCard from "../components/SquareCard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const cityWeather = (city) => {
    router.push(`/${city}`);
  };

  return (
    <>
      <div className="w-full h-full text-center text-white font-semibold text-3xl p-10">
        Choose a City
      </div>
      <iv className="w-full h-full grid grid-cols-4 grid-flow-row gap-3 p-16 text-center bg-[#222A3D]">
        <SquareCard
          img={"/london.jpg"}
          label={`London`}
          onClick={cityWeather}
        />
        <SquareCard
          img={"/nottingham.jpg"}
          label={`Nottingham`}
          onClick={cityWeather}
        />
        <SquareCard
          img={"/doha.jpg"}
          label={`Doha`}
          onClick={cityWeather}
        />
        <SquareCard
          img={"/glasgow.jpg"}
          label={`Glasgow`}
          onClick={cityWeather}
        />
      </iv>
    </>
  );
}
