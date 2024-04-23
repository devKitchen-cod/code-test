import { getPokemon, listPokemon, typedFetch } from "./utils/fetchPokemon";
import ListA from "@/components/listA";
import ListB from "@/components/listB";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  variable: "--font-inter",
  subsets: ["latin"],
});

export default async function Home() {
  const pokemon = await getPokemon("charmander");
  const listPokemonlist = await listPokemon(8);
  const array = listPokemonlist.results;

  return (
    <div className='min-h-screen max-h-full w-full flex flex-col gap-4 items-center justify-center bg-[#FCFCFC] p-20'>
      <h1 className=' font-bold text-center'>ProximaHQ Coding Challenge</h1>
      <div className='  w-[100%]  grid grid-cols-2 p-10'>
        <div className='  w-[100%]'>
          <ListA
            listOfItems={array}
            backgroundColor='bg-base-200'
            fontFamily={inter}
            fontSize='text-[20px]'
            fontColor='text-black-200'
          />
        </div>
        <div className='  w-[100%]  '>
          <ListB
            listOfItems={array}
            // backgroundColor='bg-base-200'
            fontFamily={inter}
            // fontSize='text-[20px]'
            // fontColor='text-black-200'
          />
        </div>
      </div>
    </div>
  );
}
