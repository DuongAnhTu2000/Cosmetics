import './ButtonType.scss';

function ButtonType(props) {
    return ( 
        <button type='button' className="button--style">{props.title}</button>
     );
}

export default ButtonType;