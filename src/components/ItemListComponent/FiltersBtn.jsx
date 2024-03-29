import React from 'react'
import { Link } from 'react-router-dom';

export function FiltersBtn() {
  const categorias = [
    "aperitivos", "cervezas", "bebidas-blancas", "gaseosas", "Combos"
  ]

  return (
    <ul className='Filters'>
      <Link to={"/Catalogo"} className="FiltersBtn">TODO</Link>
      {categorias.map((categoria, index) => (
        <Link key={index} className="FiltersBtn" to={`/Catalogo/${categoria}`}>{categoria.toUpperCase()}</Link>
      ))}
    </ul>
  );
}
