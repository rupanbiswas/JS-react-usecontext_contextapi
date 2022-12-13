import React, { createContext } from "react";
import CompB from "./compB";

const BioData = createContext()

const CompA = () => {
    return (
        <BioData.Provider value={'Biswas'}>
            < div >
                <CompB name={'Rupan'}></CompB>
            </div >
        </BioData.Provider>
    )
}

export default CompA
export { BioData };