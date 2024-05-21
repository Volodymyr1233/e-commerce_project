import React from 'react';
import cl from "./header.module.css";
import catalog from "./images/Catalog.png";
import user from "./images/User.png";
import search from "./images/Search.png";


function Header() {

    const links = ["Shop", "On Sale", "New Arrivals", "Brands"]

    return (
      <header className="header">
          <div className={cl.header_line}></div>

          <div className={cl.header_container}>
              <div className={cl.mainLabel}>
                  <h1>SHOP.CO</h1>
              </div>
              <ul className={cl.header_list}>
                  {links.map(link =>
                    <li>{link}</li>
                  )}
              </ul>

              <div className={cl.searchContainer}>
                  <span className={cl.searchIcon}><img src={search}/></span>
                  <input className={cl.header_search} placeholder="Search for products..."/>

              </div>

              <div className={cl.icons}>
                  <span>
                  <img src={catalog}/>
              </span>

                  <span>
                  <img src={user}/>
              </span>
              </div>

          </div>
      </header>
    );
}

export default Header;

