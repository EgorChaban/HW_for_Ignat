import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption: (option: string) => void
    value: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        value,

        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options.map((o, index) => <option
            key={index}>{o} </option>) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value)

    }

    return (
        <select onChange={onChangeCallback} value={value} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
