import { Toast as ToastBootstrap, ToastProps } from 'react-bootstrap';

interface IProps extends ToastProps {
    colors?:string
    message:string
}

export const Toast = (props: IProps) => {
    return (
        <ToastBootstrap show={props.show} onClick={props.onClick} delay={1000} 
        bg={props.colors ? props.colors : 'success'}
         autohide 
         style={{position:"absolute", zIndex:100, right: 0}}
        >
            <ToastBootstrap.Body style={{color: "#000"}}>
                {props.message}
            </ToastBootstrap.Body>
        </ToastBootstrap>
    );
}

