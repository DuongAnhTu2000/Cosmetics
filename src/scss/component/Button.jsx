import './Button.scss';

function Button(props) {
    return ( 
        <button className="button--style">{props.title}</button>
     );
}

export default Button;