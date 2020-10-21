import React from 'react';
import {
  FiLayers,
  FiShoppingBag,
  FiTruck,
  FiUsers,
  FiCodesandbox,
} from 'react-icons/fi';

import '../styles/pages/dashboard.css';

import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div id="dashboard">
      <Sidebar title="DASHBOARD" />
      <div className="cards-container">
        <div className="card">
          <FiLayers size={100} color="#05af55" />
          <h2>NOME 1</h2>
        </div>
        <div className="card">
          <FiShoppingBag size={100} color="#05af55" />
          <h2>NOME 2</h2>
        </div>
        <div className="card">
          <FiTruck size={100} color="#05af55" />
          <h2>NOME 3</h2>
        </div>
        <div className="card">
          <FiUsers size={100} color="#05af55" />
          <h2>NOME 4</h2>
        </div>
        <div className="card">
          <FiCodesandbox size={100} color="#05af55" />
          <h2>NOME 5</h2>
        </div>
        <div className="card">
          <FiLayers size={100} color="#05af55" />
          <h2>NOME 6</h2>
        </div>
        <div className="card">
          <FiShoppingBag size={100} color="#05af55" />
          <h2>NOME 7</h2>
        </div>
        <div className="card">
          <FiTruck size={100} color="#05af55" />
          <h2>NOME 8</h2>
        </div>
        <div className="card">
          <FiUsers size={100} color="#05af55" />
          <h2>NOME 9</h2>
        </div>
        <div className="card">
          <FiCodesandbox size={100} color="#05af55" />
          <h2>NOME 10</h2>
        </div>
        <div className="card">
          <FiLayers size={100} color="#05af55" />
          <h2>NOME 11</h2>
        </div>
        <div className="card">
          <FiShoppingBag size={100} color="#05af55" />
          <h2>NOME 12</h2>
        </div>
        <div className="card">
          <FiTruck size={100} color="#05af55" />
          <h2>NOME 13</h2>
        </div>
        <div className="card">
          <FiUsers size={100} color="#05af55" />
          <h2>NOME 14</h2>
        </div>
        <div className="card">
          <FiCodesandbox size={100} color="#05af55" />
          <h2>NOME 15</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
