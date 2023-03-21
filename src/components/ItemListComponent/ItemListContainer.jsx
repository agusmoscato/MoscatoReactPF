import React, { Fragment } from 'react'

import "./ItemListContainer.css"
import { Navbar } from '../NavbarComponent/Navbar'
import {ItemCard} from '../ItemCardComponent/ItemCard'




export function ItemListContainer() {
    return (
        <Fragment>
            <Navbar />
            <h1 style={{ marginTop: '30px', textAlign: 'center', fontFamily:'fantasy', letterSpacing:'7px', fontSize:'50px'  }}>Catálogo</h1>
            <div id='shopContent' style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <ItemCard/>
                
            </div>
        </Fragment>
    )
}

