"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./styles/Home.module.css"; // Import CSS Modules

export default function Home() {
  const [showBox, setShowBox] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
      setTimeout(() => {
        setShowBox(false);
      }, 1000);
    }, 800);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col justify-center items-center relative overflow-hidden">
      <Head>
        <title>고양이미용</title>
        <meta name="description" content="고양이미용" />
      </Head>
      {/* 흰 박스 */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-white flex justify-center items-center transition-transform ${
          showBox ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* 텍스트 */}
        <div
          className={`transition transform origin-bottom ${
            styles.textAnimation
          } ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            golgol tambourine club
          </h1>
          <div className="text-center text-1xl md:text-2xl">고양이 미용실</div>
        </div>
      </div>
      {/* 이미지 */}

      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-2000 delay-6000 ${
          showBox ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/image.png')" }}
      ></div>
    </div>
  );
}
