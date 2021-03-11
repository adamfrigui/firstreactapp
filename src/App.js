
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card,Container,Form,Row,Col} from 'react-bootstrap' 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <card className="mb-3">
          <Card.Img src="https://picsum.photos/200/100"/>
          <Card.Body>
            <Card.Title>
              Card Example              
            </Card.Title>
            <Card.Text>
              Exemple of react-bootstrap cards
            </Card.Text>
            <Button variant="warning">Just Press It</Button>
          </Card.Body>
        </card>
         <Form>
           <Row>  
           <Col md> 
           <Form.Group controlId="formEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Example@e-mail.com"></Form.Control> 
            </Form.Group>
            </Col>
            
            <Col md>
            <Form.Group controlId="formEmail">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="password"></Form.Control>
            </Form.Group>
            </Col>
            </Row>

            <Button variant="secondary" type="submit">Just Press It</Button>
        </Form>
        </Container>
   
      </header>
    </div>
  );
}

export default App;
