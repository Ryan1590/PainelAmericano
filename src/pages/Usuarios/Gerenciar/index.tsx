import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "../../../componentes/LayoutDashboard";
import { useEffect, useState } from "react";
import { verificaTokenExpirado } from "../../../services/token";
import { Loading } from "../../../componentes/Loading";
import { Itoken } from "../../../interfaces/token";
import axios from "axios";

interface IUsuarios {
    id: number;
    nome: string;
    email: string;
    permissoes: string;
}

export default function Usuarios() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [dadosUsuarios, setDadosUsuarios] = useState<Array<IUsuarios>>([]);

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

        setLoading(true);

        axios.get('http://localhost:3001/users')
            .then((res) => {
                setDadosUsuarios(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

    }, [navigate]);

    return (
        <>
            {loading && <Loading visible={loading} />}
            <LayoutDashboard>
                <div className="d-flex justify-content-between mt-3">
                    <h1>Usuarios</h1>
                    <button type="button" className="btn btn-success" onClick={() => { navigate('/usuarios/criar') }}>Adicionar</button>
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
                        {dadosUsuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <th scope="row">{usuario.id}</th>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    <button className="btn btn-primary" style={{ marginRight: 5 }}>Editar</button>
                                    <button className="btn btn-danger" style={{ marginRight: 5 }}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </LayoutDashboard>
        </>
    );
}
