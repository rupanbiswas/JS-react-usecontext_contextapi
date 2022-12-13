import React from "react";
import CompC from "./compC";

const CompB = ({ name }) => {
    return (
        < div >
            <CompC name={name}></CompC>
        </div >
    )
}

export default CompB