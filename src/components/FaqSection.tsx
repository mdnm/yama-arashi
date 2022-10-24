import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

const questions = [
  {
    title: "Durante questo periodo c'è la possibilità di allenarsi?",
    answer:
      "Gli allenamenti in palestra, sono riservati solo agli agonisti in preparazione ad una gara di interesse nazionale. Per allenarsi è necessario che tutti gli agonisti abbiano il certificato medico specifico ed è necessaria un'iscrizione ad una gara di interesse nazionale.",
  },
  {
    title: "Se non sono agonista posso comunque allenarmi?",
    answer:
      "Si, organizziamo allenamenti all'aperto in rispetto all'ultimo DPCM",
  },
  {
    title: "Con che frequenza avete i corsi in palestra?",
    answer: "Ogni giorno svolgiamo diversi corsi",
  },
  {
    title: "Come posso iscrivermi?",
    answer:
      "Trovi tutti i dettagli nella sezione dedicata, trovi inoltre tutti i contatti nella parte superiore ed inferiore del sito.",
  },
];

export function FaqSection() {
  return (
    <Container
      id="faq"
      data-name="faq"
      className="d-flex flex-column justify-content-center align-items-center min-vh-100-navbar bg-light py-5"
    >
      <h2 className="fs-1 fw-bold text-center">Domande Frequenti</h2>
      <p className="text-center">
        Di seguito le domande più frequenti a cui potete trovare risposta.
      </p>
      <Accordion defaultActiveKey="0" className="w-50 mt-5">
        {questions.map((question, index) => (
          <Accordion.Item eventKey={index.toString()} key={question.title}>
            <Accordion.Header>{question.title}</Accordion.Header>
            <Accordion.Body>{question.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
