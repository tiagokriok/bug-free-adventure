import React from 'react';
import { FiLogOut, FiCalendar, FiUser } from 'react-icons/fi';

import '../styles/components/sidebar.css';
{
  /**
  //TODO: criar interface para os props recebidos
*/
}
interface SidebarProps {
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div>
      <aside className="app-sidebar">
        <h1>SIS</h1>
        {/**
       //TODO: <Link to="" /> para todos os Menus
       */}
        <a href="#">MENU#1</a>
        <a href="#">MENU#2</a>
        <a href="#">MENU#3</a>
        <a href="#">MENU#4</a>
        <a href="#">MENU#5</a>
        <a href="#">MENU#6</a>
        <a href="#">MENU#7</a>
        <a href="#">MENU#8</a>
        <a href="#">MENU#9</a>
        <a href="#">MENU#10</a>
        <footer>
          {/*
          //TODO: Adicionar o <Link to="/logout" />
         */}
          <a>
            <FiLogOut size={20} color="#fff" />
            LOGOUT
          </a>
        </footer>
      </aside>
      <nav className="menu-header">
        <div className="menu-list">
          {/*
          //TODO: Adicionar Data
          //TODO: Link to profile
         */}
          <h4>21/10/2020</h4>
          <h3>{props.title}</h3>
          <a href="#">
            <FiUser
              size={26}
              color="#fff"
              style={{
                marginRight: 5,
                marginLeft: 5,
                border: '1px solid white',
                borderRadius: 20,
              }}
            />{' '}
            {/* PERFIL */}
          </a>
          {/**
       //?Perfil para usuários
       */}
        </div>
      </nav>
    </div>
  );
}
