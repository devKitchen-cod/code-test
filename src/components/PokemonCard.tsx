import Image from "next/image";

interface IPokemonCardProps {
  currentPokemon: any;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ currentPokemon }) => {
  return (
    <div className='flex justify-around'>
      <Image
        src={currentPokemon.sprites.front_default}
        alt={currentPokemon.name}
        width={96}
        height={96}
      />
      <div className='flex flex-col'>
        <span>base_experience: {currentPokemon.base_experience}</span>
        <span>height: {currentPokemon.height}</span>
        <span>order: {currentPokemon.order}</span>
        <span>weight: {currentPokemon.weight}</span>
      </div>
    </div>
  );
};

export default PokemonCard;
