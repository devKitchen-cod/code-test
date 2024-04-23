import React from "react";
import SatsCard from "./statsCard";
import AbilitiesCard from "./abilitiesCard";

interface IListB {
  listOfItems: any;

  fontFamily: any;
  headerSize: any;
  paragraphSize: any;
  backgroundColor: any;
  fontColor: any;
}
const ListB: React.FC<IListB> = ({ fontFamily }) => {
  return (
    <div className={`w-[100%] `}>
      <SatsCard fontFamily={fontFamily} />
      <AbilitiesCard fontFamily={fontFamily} />
    </div>
  );
};

export default ListB;
