import React from "react";
import SatsCard from "./statsCard";
import AbilitiesCard from "./abilitiesCard";

interface IListB {
  count: number;
  items: object;
  listOfItems: any;

  //   fontFamily: any;
  //   headerSize: any;
  //   paragraphSize: any;
  //   backgroundColor: any;
  //   fontColor: any;
}
const ListB: React.FC<IListB> = ({ count, items, listOfItems }) => {
  console.log(count);
  //   console.log(items);
  console.log(listOfItems);
  return (
    <div className=' w-[100%]'>
      <SatsCard />
      <AbilitiesCard />
    </div>
  );
};

export default ListB;
