import charactersData from '../characterJSON/characters';

const Characters = (props) => {

    return (
        <div>
        <h1>Characters</h1>
            <div className="row">
            {charactersData.map((card, index) => (
                <div className="col-4">
                    <div className="card__item" key={index}>
                    <div className="card__item__img">
                        <img className="med-Img" src={card.Character_Image} alt={card.Character_Name} />
                        <h3>{card.Character_Name}</h3>
                        <p>"{card.Pitch}"</p>
                        <p>{card.Class_Names}</p>
                        <p><b>Gameplay Type:</b> {card.Attack_movement}</p>
                        <p><b>Summary:</b> {card.Short_desc}</p>
                        {/* <Link to={`/character/${card.Character_Name}`}>
                        <button>View Character</button>
                        </Link> */}
                        <a href={`/character/${card.Character_Name}`}>View Character</a>
                    </div>
                    <div className="card__item__info">
                        
                        </div>
                </div>
                </div>
            ))}
            </div>

        </div>
    );
    }

export default Characters;