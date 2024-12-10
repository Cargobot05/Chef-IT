import React from 'react';
import '../styles/index.css';
import '../styles/home.css';
import RecipeCard from '../components/recipe-card';

function Home() {
    return (
        <div className='viewport'>
            <div className='splash'>
                <img src='/src/assets/logo-large.svg'/>
            </div>
            <div className='section' style={{backgroundColor: '#08246c', boxShadow: '0px 0.5em 1.5em rgba(0, 0, 0, 0.267)'}}>
                <p className='section-header'>Top rated recipes</p>
                <div className='carousel'>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                </div>
            </div>
            <div className='section' style={{height: '55vh', justifyContent: 'flex-end'}}>
                <div className='socials'>
                    <img src='/src/assets/instagram.svg'/>
                    <img src='/src/assets/facebook.svg'/>
                    <img src='/src/assets/youtube.svg'/>
                    <img src='/src/assets/twitch.svg'/>
                </div>
            </div>
        </div>
    );
}

export default Home;