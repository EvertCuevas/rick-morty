
export default function Character(props) {
  const { characters, setCharacters } = props;
  
  const resetCharacters = () => {
    setCharacters(null);
  }
  
  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
        <div className="container-characters">
          {characters.map((characters, index) => (
            <div className="character-container" key={index}>
              <div>
                <img src={characters.image} alt={characters.name}></img>
              </div>
              <div>
                <h3>{characters.name}</h3>
                <h6>
                  {characters.status === "Alive" ? (
                    <>
                    <span className="alive">
                      Alive
                    </span>
                    </>
                  ):(
                    <>
                    <span className="dead">
                      Dead
                    </span>
                    </>
                  )}
                </h6>
                <p className="test-grey">
                  <span>Episodios:</span>
                  <span>{characters.episode.length}</span>
                </p>
                <p className="test-grey">
                  <span>Especie:</span>
                  <span>{characters.species}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
    </div>
  )
}
