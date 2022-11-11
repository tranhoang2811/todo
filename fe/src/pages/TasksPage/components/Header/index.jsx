function Header(){
    return (
        <div className="container__heading">
            <h1>Todo list</h1>
            <div className="user-account">
                <div className="account-actions">
                    <div className="user-information">
                        <p className="user-name">User name</p>
                    </div>
            
                    {/* <ul className="options-container">
                        <li className="option logout-button"><button>Logout</button></li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Header