import React, { useContext } from "react";
import { BioData } from "./compA";

const CompC = ({ name }) => {
    const tittle = useContext(BioData)
    return (
        < div >
            <h1>Hello {name} {tittle}</h1>
        </div >
    )
}

export default CompC