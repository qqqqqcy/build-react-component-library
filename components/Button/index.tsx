import React from 'react';
import './style/index.scss';
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    value: string;
}

const Button = (props: Props) => {
    const { value } = props;
    return <button {...props} />;
};

export default Button;
