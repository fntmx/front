import React, {useEffect, useState} from "react";
import InputContainer from "./InputContainer";

export default function InputTextArea({id, label, bottomLabel, placeholder, name, value, onChange, error, mask}) {
    /*
    const [maskedValue, setMaskedValue] = useState("");
    useEffect(() => {
        //Transform value so it is conformant with mask, if it isn't, setError
        switch (mask) {
            case "password":

            default:
                break;
        }
    }, [value]);*/

    return (
        <InputContainer error={error ? error : null}>
            {label && <label htmlFor={id}>{label}</label>}
            <textarea id={id} name={name} value={value} onChange={onChange} placeholder={placeholder ? placeholder : null} />
            {bottomLabel && <label htmlFor={id}>{bottomLabel}</label>}
        </InputContainer>
    );
}