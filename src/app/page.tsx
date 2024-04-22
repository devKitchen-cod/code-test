import { getPokemon, listPokemon, typedFetch } from "./utils/fetchPokemon";
import ListA from "@/components/listA";
import ListB from "@/components/listB";
import { Inter, Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default async function Home() {
  const pokemon = await getPokemon("charmander");
  const listPokemonlist = await listPokemon(8);
  const array = listPokemonlist.results;
 const size = 30
  return (
    <div className='min-h-screen max-h-full w-full flex flex-col gap-4 items-center justify-center bg-[#FCFCFC] p-20'>
      <h1 className=' font-bold text-center'>ProximaHQ Coding Challenge</h1>
      <div className='  w-[100%]  grid grid-cols-2 p-10'>
        <div className='  w-[100%]  grid grid-start-7 '>
          <ListA
            listOfItems={array}
            backgroundColor='bg-blue-500'
            fontFamily={poppins.className}
            fontSize={`text-[${size}px]`}
          />
        </div>
        <div className='  w-[100%]'>
          <ListB count={4} items={pokemon} listOfItems={array} />
        </div>
      </div>
    </div>
  );
}
