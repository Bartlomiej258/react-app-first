import style from './Button.module.scss';

const Button = props => {
    return(
        <button className={style.button}> CREATE{props.children}</button>
    );
};

export default Button;