import { NavLink } from 'react-router-dom';

export default function Navigation({ isFixed }) {
  const menuItems = [
    { to: '/', label: 'About me' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/behind', label: 'Behind' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <>
      <nav
        className={`header__navigation basic-inner ${isFixed ? 'fixed' : ''}`}
        aria-label="헤더 네비게이션">
        <ul className="header__nav-list">
          {menuItems.map((item, index) => {
            return (
              <li className="header__nav-item" key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `header__nav-link ${
                      isActive ? 'header__nav-link--active' : ''
                    }`
                  }>
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
