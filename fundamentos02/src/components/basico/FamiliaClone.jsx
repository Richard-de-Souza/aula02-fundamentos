import React, { cloneElement } from 'react'

export default props => {
    return(
        <div>
            {/*Para um unico elemento filho*/}
            {/*{cloneElement(props.children,{...props})}*/}

            {/*Para varios elementos filhos*/}
            {props.children.map((chield) => {
                return cloneElement(chield, {...props})
            })}            
        </div>
    )
}