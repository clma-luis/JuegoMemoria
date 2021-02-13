import React from 'react';
import Cards from './Cards';
import '../assets/styles/components/Table.scss';

const Table =() =>{
    const cartas = [1,2,3,4,5];
    return(
<div className="table">
{
    cartas.map((carta) => <Cards/>)
}

</div>
);
};

export default Table;