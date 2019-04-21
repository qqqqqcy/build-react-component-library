import React from "react"

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    value: string;
}

const Button = (props: IProps) => {
    const { value } = props;
    return (<button {...props} />)
}

export default Button