import React, { Component , useState } from 'react';
import './styles.css';
import { HiMenuAlt3, HiLogout } from 'react-icons/hi';
import {FaBars, FaCartPlus} from 'react-icons/fa';
import {IoIosPaper} from 'react-icons/io';
import {AiOutlineClose, AiFillHome} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {logout} from '../../utils/storage'



const SidebarData = [
  {
    title:'Perfil do Aluno',
    path:"/",
    icon:<AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title:'Mensagens',
    path:"/",
    icon:<IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title:'Centro Educacional',
    path:"/",
    icon:<FaCartPlus />,
    cName:'nav-text'
  }
]

const SideBar = () => {
  function LogingOut(event) {
      logout()
  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='SideBar'>
          <Link to='#' className='menu-bars'>
            <HiMenuAlt3 onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='SideBar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='nav-textx'>
              <HiLogout /> 
              <span onClick={LogingOut}>Logout</span>
            </li>
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default SideBar;