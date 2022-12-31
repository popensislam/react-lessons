const PokemonCard = ({ pikachu }) => {
  // pikachu.name
  // pikachu.stats (array)
  // pikachu.sprites.other.dream_world.front_defaul
  return ( 
    <div className="card">
      <div className="back-content center">
          <img className='pokemonImg' src={pikachu?.sprites?.other.dream_world.front_default} alt='img pokemon'/>
          <h2 className='pikachuName'>{pikachu.name}</h2>
          {pikachu?.stats?.map((item, i) =>
            <div key={i} className='flexItem'>
              <span>{item.stat.name}</span>
              <span>{item.base_stat}</span>
            </div>
          )}
          <i className="fas fa-heart"></i>
      </div>
    </div>
   );
}
 
export default PokemonCard;