import { Container, Card, Button } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <Button onClick={()=>{
                    props.setDetalharCandidato(false);
                    props.setCandidatoSelecionado({
                        id: 1,
                        email: "",
                        nome: "",
                        avatar: "",
                        propostas:[],
                        curtidas:0,
                        descurtidas:0,
                        questionamentos:[]
                    });
                }}
                className="mt-1" variant="success">Voltar</Button>
                <Card.Img variant="top" height="300" width="30" src={props.candidatoSelecionado.avatar} />
                <p>{"ID: " + props.candidatoSelecionado.id}</p>
                <p>{"Email: " + props.candidatoSelecionado.email}</p>
                <p>{"Nome: " + props.candidatoSelecionado.nome}</p>
                <p>{"Curtidas: " + props.candidatoSelecionado.curtidas}</p>
                <p>{"Descurtidas: " + props.candidatoSelecionado.descurtidas}</p>
                <h1>Proposta do candidato:</h1>
                {props.candidatoSelecionado.propostas.map((proposta) => (
                    <p>{proposta}</p>
                ))}
        
        </Container>
    );
}