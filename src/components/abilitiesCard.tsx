"use client";
import { typedFetch } from "@/app/utils/fetchPokemon";
import appSelectore from "@/features/appSelectors";
import { useAppSelector } from "@/hooks/reduxHooks";
import React, { useEffect, useState } from "react";
interface IAbilitiesCard {
  fontFamily: any;
}
const AbilitiesCard: React.FC<IAbilitiesCard> = ({fontFamily}) => {
  let temp = useAppSelector(appSelectore.getAbilitiesPokemon);
  const [abilityState, setAbilityData] = useState([] as any);

  const checkLanguage = (res: any) => {
    const effectItem = res.effect_entries.find(
      (effect_item: any) => effect_item.language.name === "en"
    );
    if (effectItem) {
      return effectItem;
    }
    return undefined;
  };

  const fetchData = async (temp: any) => {
    try {
      let data = await Promise.all(
        temp.map(async (item: any, index: number) => {
          let res = await typedFetch(item.ability.url);
          let checkedEffects = checkLanguage(res);
          let abilityData = {
            ability: item.ability,
            effect_entries: checkedEffects.effect,
          };
          return abilityData;
        })
      );
      setAbilityData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (temp) {
      fetchData(temp);
    }
  }, [temp]);

  return (
    <div className='collapse bg-base-200 mt-10 collapse-arrow text-[20px]'>
      <input type='radio' name='my-accordion-3 	' />
      <div
        className={`collapse-title text-xl  text-[20px] uppercase font-bold ${fontFamily.variable} font-sans`}>
        Abilities
      </div>
      <div className='collapse-content '>
        {abilityState?.map((items: any, index: number) => (
          <div key={index} className={` ${fontFamily.variable} font-sans`}>
            <p className=' text-[20px] font-bold   uppercase mt-5'>
              {items.ability.name} :
            </p>{" "}
            {items.effect_entries}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbilitiesCard;
