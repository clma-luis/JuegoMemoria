import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import BuildCards from '../utils/BuildCards';
import '../assets/styles/App.scss';

const getStadoInicial = () => {
const baraja = BuildCards();
return{
  baraja
};
}



function App() {


  return (
    <div className="App">
  
     <Header/>
     <Table/>
    </div>
  );
}

export default App;
