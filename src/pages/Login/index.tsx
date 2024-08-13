import { SyntheticEvent, useRef } from 'react'
import styles from './styles.module.css'

export default function Login() {


//const refForm = useRef<any>();
const refForm = useRef<HTMLFormElement>(null);

const submitForm = (event:SyntheticEvent) => { // SyntheticEvent serve para saber o que tem dentro de event exemplo: event. // mostra as opções
    event.preventDefault(); // não permite com que o nosso evento do onSubimit de reload
    console.log("enviou formulario");
}

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
                        <label htmlFor="email" className='form-label'>E-mail</label>
                        <input type="email" className='form-control' placeholder='Digite seu email' name="email" id='email' required/>
                    </div>
                    <div className='col-md-12 mt-1'>
                        <label htmlFor="senha" className='form-label'>Senha</label>
                        <input type="password" className='form-control' name="senha" id="senha" placeholder='Digite sua senha' required />
                    </div>
                    <div className='invalid-feedback'>
                        por favor digite sua senha
                    </div>
                    <div className='col-md-12 mt-3'>
                        <button className='btn btn-primary w-100' type='submit' id='botao'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}