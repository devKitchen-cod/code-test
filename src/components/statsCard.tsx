"use client";
import { getPokemon } from "@/app/utils/fetchPokemon";
import appSelectore from "@/features/appSelectors";
import { useAppSelector } from "@/hooks/reduxHooks";
import React, { useEffect, useState } from "react";
interface ISatsCard {
  fontFamily: any;
}
const SatsCard: React.FC<ISatsCard> = ({ fontFamily }) => {
  let temp = useAppSelector(appSelectore.getCurrentPokemon);

  return (
    <div
      className={`collapse bg-base-200 collapse-arrow ${fontFamily.variable} font-sans  `}>
      <input type='radio' name='my-accordion-2 	' />
      <div
        className={`collapse-title text-xl  text-[20px] uppercase font-bold `}>
        Stats
      </div>
      <div className='collapse-content'>
        {temp?.map((items: any, index: number) => (
          <div key={index} className=' text-[18px] uppercase'>
            <p>
              {items.stat.name} : {items.base_stat}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SatsCard;
