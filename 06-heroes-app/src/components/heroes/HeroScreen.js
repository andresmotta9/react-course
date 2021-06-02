import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { heroesImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg' // static


export const HeroScreen = ({ history }) => {

    const { heroeId } =  useParams();
    
    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);

    if ( !hero ) {  
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        history.length <= 2 ? history.push('/') : history.goBack();
        // history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src={`../assets/heroes/${heroeId}.jpg`} // from public/assets
                    src={ heroesImages(`./${heroeId}.jpg`).default }
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    alt={superhero}
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"><b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"><b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>
                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
        </div>
    )
}
