import '../styles/recipe-card.css';

function RecipeCard() {
    return(
        <div className='card'>
            <img className='thumbnail' src='usr-content/photos/food/fries.png'/>
            <div className='info'>
                <div className='title'>Cartofi prajiti</div>
                <div className='rating'>
                    <img src='/src/assets/star.svg'/>
                    <img src='/src/assets/star.svg'/>
                    <img src='/src/assets/star.svg'/>
                    <img src='/src/assets/star.svg'/>
                    <img src='/src/assets/star.svg'/>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;