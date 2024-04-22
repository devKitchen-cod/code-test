"use client";
import { getPokemon } from "@/app/utils/fetchPokemon";
import appSelectore from "@/features/appSelectors";
import { useAppSelector } from "@/hooks/reduxHooks";
import React, { useEffect, useState } from "react";

const SatsCard: React.FC = () => {
    let temp = useAppSelector(appSelectore.getCurrentPokemon)
    console.log('temp', temp)

    useEffect(() => {
        console.log('temp', temp)
    }, [temp])
  return (
    <div className='collapse bg-base-200 ' >
      <input type='radio' name='my-accordion-2 	' />
      <div className='collapse-title text-xl font-medium'>Stats</div>
      <div className='collapse-content'>
        {temp?.map((items:any, index:number) => (
            <div key={index}>
                <p>{items.stat.name} : {items.base_stat}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SatsCard;
