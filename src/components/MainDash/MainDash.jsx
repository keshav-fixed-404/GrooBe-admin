import Table from "../Table/Table";
import React from 'react'
import Cards from '../Cards/Cards'
import './MainDash.css';

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1 className="Dashboard-heading">Dashboard</h1>
      <Cards />
      <Table />
    </div>
  )
}

export default MainDash;
