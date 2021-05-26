import React, { Component } from 'react'
import './App.css'

import IndiretaPai from './components/basico/IndiretaPai'
import Estado from './components/basico/Estado'
import FamiliaClone from './components/basico/FamiliaClone'
import FamiliaMembroClone from './components/basico/MembroFamiliaClone'
import Aninhados from './components/basico/Familia'
import Card from './components/layout/Card'
import Propriedades from './components/basico/Propriedades'
import OlaMundo from './components/basico/OlaMundo'

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Exemplos de React</h1>

        <div className= "Cards"> 

          <Card titulo="Comunicação indireta (de filho para pai)" cor="#f7673b">
            <IndiretaPai/>
          </Card>

          <Card titulo= "Estado" cor="#ffb400">
            <Estado/>
          </Card>

          <Card titulo="Componentes aninhados (CloneElement)" cor= "#82212e">
            <FamiliaClone sobrenome="Simpson">
              <FamiliaMembroClone nome="Homer Jay"/>
              <FamiliaMembroClone nome="Majorie"/>
              <FamiliaMembroClone nome="Bartholomew Jojo"/>
              <FamiliaMembroClone nome="Lisa"/>
              <FamiliaMembroClone nome="Homer Jay"/>
            </FamiliaClone>
          </Card>

          <Card titulo="Componentes aninhados" cor= "#d1495b">
            <Aninhados sobrenome="Simpson"/>
          </Card>

          <Card titulo="Propriedades" cor="#91cb3e">
            <Propriedades nome="Homer" sobrenome= "Jay Simpson" idade={38}/>
          </Card>

          <Card titulo= "Olá Mundo" cor="#226ce0">
           <OlaMundo/>
          </Card>
        </div>
      </div>
    )
  }
}
export default App;