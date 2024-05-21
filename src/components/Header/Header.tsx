import React from 'react';


function Header() {

    const links = ["Shop", "On Sale", "New Arrivals", "Brands"]

    return (
      <header className="header">
          <div>
              <h1>SHOP.CO</h1>
              {links.map(link =>
                <li>{link}</li>
              )}
          </div>
      </header>
    );
}

export default Header;

