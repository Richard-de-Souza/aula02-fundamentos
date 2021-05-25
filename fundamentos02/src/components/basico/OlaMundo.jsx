import React from 'react'

function OlaMundo()  {

    const informacao = 'primeiro componente JSX'
    return(
        <div>
            <h2>componente OlaMundo</h2>
            <p>{ informacao } </p>
        </div>
    )
}

export default OlaMundo