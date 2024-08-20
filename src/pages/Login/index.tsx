import { SyntheticEvent, useRef } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

export default function Login() {
    const refForm = useRef<HTMLFormElement>(null);

    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();

        if (refForm.current && refForm.current.checkValidity()) {
            const target = event.target as typeof event.target & {
                email: { value: string },
                senha: { value: string },
            };

            axios.post('http://localhost:3001',  // isso é uma promessa, consumindo algo
                {
                    email:target.email.value,
                    password:target.senha.value,
                }
            ).then((resposta) => {
                console.log("Deu bom")
                console.log(resposta)
            }).catch((erro)=>{
                console.log("Deu ruim")
                console.log(erro)
            })

        
           // console.log('Email:', emailValue);
            //console.log('Senha:', senhaValue);
        } else {
            if (refForm.current) {
                refForm.current.classList.add('was-validated');
            }
        }

        console.log('enviou formulario');
    };

    return (
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
                        <input type='email' className='form-control' placeholder='Digite seu email' id='email' required />
                        <div className='invalid-feedback'>Por favor digite seu email</div>
                    </div>

                    <div className='col-md-12 mt-1'>
                        <label htmlFor='senha' className='form-label'>Senha</label>
                        <input type='password' className='form-control' placeholder='Digite sua senha' id='senha' required />
                        <div className='invalid-feedback'>Por favor digite sua senha</div>
                    </div>

                    <div className='col-md-12 mt-3'>
                        <button className='btn btn-primary w-100' type='submit' id='botao'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
