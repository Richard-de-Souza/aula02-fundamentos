import React, { useState } from 'react';

export default props => {
    const [nome, setNome] = useState('Bartholomew Jojo Simpson')

    return(
        <div>
            <button onClick={() => {
                props.quandoClicar(nome)
            }}>
                fornecer informações do Aluno
            </button>
        </div>
    )
}