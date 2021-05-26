import React from 'react';

export default function Propriedades(props) {
    return(
        <div>
            <h2>{ props.nome }</h2>
            <h3>{ props.sobrenome }</h3>
            <h3>{ props.idade }</h3>
        </div>
    )
}