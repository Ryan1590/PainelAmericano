import { useEffect } from "react";
import { LayoutDashboard } from "../../componentes/LayoutDashboard";
import { Itoken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

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

    return (
        <LayoutDashboard>
        <h1>Graficos</h1>
        </LayoutDashboard>
    )
}
