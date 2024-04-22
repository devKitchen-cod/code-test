"use client";

import { getPokemon } from "@/app/utils/fetchPokemon";
import { setCurrentPokemon } from "@/features/appSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import Image from "next/image";
import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Inter, Poppins } from "next/font/google";

interface IListAProps {
  listOfItems: { name: string; url: string }[];
  backgroundColor: string;
  fontFamily: any;
  fontSize: any;
}
const poppins = Inter({
  weight: "400",
  variable: "--font-inter",
  subsets: ["latin"],
});
const ListA: React.FC<IListAProps> = ({
  listOfItems,
  backgroundColor,
  fontFamily,
  fontSize,
}) => {
  console.log(
    "[listOfItems]",
    backgroundColor,
    fontFamily,
    fontSize
  );
  const [state, setState] = useState({} as any);
  const dispatch = useAppDispatch();
  const handleGetData = async (name: any) => {
    let current_pokemon: any = await getPokemon(name);
    setState(current_pokemon);
  };
  dispatch(setCurrentPokemon(state.stats));
  console.log(state);
  return (
    <div className={`w-[80%] flex justify-center `}>
      <div className='  w-[100%]  '>
        {listOfItems.map((item: any, index: number) => (
          <div
            className={`collapse ${backgroundColor}  mb-5`}
            key={index}
            onClick={() => handleGetData(item.name)}>
            <input type='radio' name='my-accordion-1' />
            <div className='collapse-title text-xl font-medium'>
              <span
                className={`flex justify-center ${poppins.variable} font-sans ${fontSize} `}>
                {item.name}
              </span>
            </div>
            <div className='collapse-content'>
              {Object.values(state).length ? (
                <PokemonCard currentPokemon={state} />
              ) : (
                <p> loading...</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListA;
