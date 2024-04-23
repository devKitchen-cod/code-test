import React from "react";
import SatsCard from "./StatsCard";
import AbilitiesCard from "./AbilitiesCard";

interface IListB {
  fontFamily: any;
  fontSize: any;
  backgroundColor: any;
  fontColor: any;
}
const ListB: React.FC<IListB> = ({ fontFamily, fontSize, backgroundColor, fontColor }) => {
  return (
    <div className={`w-[100%] `}>
      <SatsCard fontFamily={fontFamily} fontSize={fontSize} backgroundColor={backgroundColor} fontColor={fontColor}/>
      <AbilitiesCard fontFamily={fontFamily} fontSize={fontSize} backgroundColor={backgroundColor} fontColor={fontColor}/>
    </div>
  );
};

export default ListB;
