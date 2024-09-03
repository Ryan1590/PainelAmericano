import { SyntheticEvent, useRef, useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import { Loading } from '../../componentes/Loading';
import { Toast } from '../../componentes/Toast';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    
    //hoks
    const navigate = useNavigate();

    const refForm = useRef<HTMLFormElement>(null);

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);

    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();

        if (refForm.current && refForm.current.checkValidity()) {
            const formData = new FormData(refForm.current);
            const emailValue = formData.get('email') as string;
            const senhaValue = formData.get('senha') as string;

            setLoading(true); 

            axios.post('http://localhost:3001/login', {
                email: emailValue,
                password: senhaValue,
            })
            .then((resposta) => {
                console.log(resposta);
                setLoading(false);

                localStorage.setItem(
                    'americanos.token', 
                    JSON.stringify(resposta)
                )

                navigate('/dashboard'); 
            })
            .catch((erro) => {
                console.log(erro);
                setLoading(false);
                setToast(true);
            });

        } else {
            if (refForm.current) {
                refForm.current.classList.add('was-validated');
            }
        }

        console.log('enviou formulario');
    };

    return (
        <>
        <Loading 
            visible={loading} 
        />

        <Toast 
            show={toast} 
            message= 'Dados inválidos' 
            colors='danger'
            onClose={()=>{setToast(false)}}
        />
        
        <div className={styles.main}>
            <div className={styles.border}>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className='text-primary'>Login</h1>
                    <p className='text-secondary'>Preencha os campos para logar</p>
                </div>

                <hr />

                <form className='needs-validation align-items-center' noValidate onSubmit={submitForm} ref={refForm}>
                    <div className='col-md-12'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' name='email' placeholder='Digite seu email' id='email' required />
                        <div className='invalid-feedback'>Por favor digite seu email</div>
                    </div>

                    <div className='col-md-12 mt-1'>
                        <label htmlFor='senha' className='form-label'>Senha</label>
                        <input type='password' className='form-control' name='senha' placeholder='Digite sua senha' id='senha' required />
                        <div className='invalid-feedback'>Por favor digite sua senha</div>
                    </div>

                    <div className='col-md-12 mt-3'>
                        <button className='btn btn-primary w-100' type='submit' id='botao'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
