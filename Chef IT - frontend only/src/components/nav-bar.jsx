import '../styles/nav-bar.css';

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="menu">
                <button className="img-button no-border"></button>
                <button>Recipes</button>
                <button>Add Recipe</button>
            </div>
            <div className="accounts">
                <button>Sign up</button>
                <button className="no-border">Log in</button>
            </div>
        </div>
    );
}

export default NavBar;