import React from 'react';

import FamiliaMembro from './MembroFamilia'

export default props => {
    return(
        <div>
            <FamiliaMembro nome="Homer Jay" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Marjorey" sobrenome="Bouvier"/>
            <FamiliaMembro nome="Bartholomew Jojo" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Lisa Marie" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Matgareth" sobrenome={props.sobrenome}/>
        </div>
    )
}