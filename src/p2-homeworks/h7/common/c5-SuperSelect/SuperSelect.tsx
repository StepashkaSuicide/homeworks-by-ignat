import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }

const mappedOptions: any[] = options ? options.map((t, i)=> (
    <option key={t + '-' + i} value={t}>{t}</option>
)):[]

            return(
    <select onChange={onChangeCallback} {...restProps}>
        {mappedOptions}
    </select>
)
}

export default SuperSelect
