import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption: (option: string) => void
    name: string
    value: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

           onChangeOption(e.currentTarget.value)

        // onChange, onChangeOption
    }


    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                onChange={onChangeCallback}
                name = {name}
                value = {o}
                checked={value === o}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
