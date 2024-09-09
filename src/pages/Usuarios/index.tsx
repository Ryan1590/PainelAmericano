import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "../../componentes/LayoutDashboard"
import { useEffect } from "react";
import { Itoken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { Loading } from "../../componentes/Loading";

export default function Usuarios () {

    const navigate = useNavigate();

    useEffect(() => {
        const lsStorage = localStorage.getItem('americanos.token');
        
        let token: Itoken | null = null;

        if (lsStorage) {
            try {
                token = JSON.parse(lsStorage);
            } catch (e) {
                console.error("Erro ao fazer parse do token:", e);
            }
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate('/');
            return;  
        }

        console.log("Pode desfrutar do sistema");

    }, [navigate]);

    return(
        <>
        <Loading/>
        <LayoutDashboard>
            <div className="d-flex justify-content-between mt-3">
                <h1>Usuarios</h1>

                <button type="button" className="btn btn-success" onClick={()=>{}}>Adicionar</button>
            </div>

            <table className="table table-striped">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">123</th>
                        <td scope="row">M depay</td>
                        <td scope="row">Depay@gmail.com</td>
                        <td scope="row"><button className="btn btn-primary" type="submit" style={{marginRight:5}}>Editar</button><button className="btn btn-danger" type="submit" style={{marginRight:5}}>Excluir</button></td>
                    </tr>
                </tbody>

            </table>
        </LayoutDashboard>
        </>
    )
}




