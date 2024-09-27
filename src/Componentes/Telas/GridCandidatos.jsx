import { useState } from "react";
import Candidato from "./elementos/Candidato";
import candidatos from "../../dados/candidatos.js"
export default function GridCandidatos(props) {

    const [listaCandidatos, setListaCandidatos] = useState(candidatos);
    
    if (listaCandidatos) {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
                gap: '20px'
            }}>
                {listaCandidatos.map((candidato) => (
                    <Candidato 
                        key={candidato.id}
                        candidato={candidato}
                        listaCandidatos={listaCandidatos}
                        setListaCandidatos={setListaCandidatos}
                    />
                ))}
            </div>
        )
    }
    else {
        return (<h1>Carregando...</h1>)
    }
}