import React from 'react';
import './style/index.scss';
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    value: string;
}
declare const Button: (props: Props) => JSX.Element;
export default Button;
