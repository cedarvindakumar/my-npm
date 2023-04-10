import React from "react";
import './Button.css';



interface ButtonProps {
    type?: 'default' | 'outline' | 'link' | 'rounded';
    varient1?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
    onClick?: () => void | string;
    children?: string;


}

export const Button = ({ type = "default", varient1, children, ...props }: ButtonProps) => {

    return (
        <>
            <button className={`button button-${type} button--${varient1}`} onClick={props.onClick}>
                {varient1}
            </button>
        </>
    )
};
















