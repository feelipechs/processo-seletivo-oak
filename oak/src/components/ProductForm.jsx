import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from './Header'

const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
`

const FormContainer = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [isAvailable, setIsAvailable] = useState('sim');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      available: isAvailable === 'sim',
    };
    onAddProduct(newProduct);

    navigate('/product-list');
  };
  
  return (
    <Container>
      <Header />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Insira o nome do produto"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrição do Produto</Form.Label>
          <Form.Control
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Insira a descrição do produto"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Valor do Produto</Form.Label>
          <Form.Control
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Insira o preço do produto"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Disponível para Venda</Form.Label>
          <Form.Check
            type="radio"
            label="Sim"
            name="availability"
            value="sim"
            checked={isAvailable === 'sim'}
            onChange={(e) => setIsAvailable(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Não"
            name="availability"
            value="não"
            checked={isAvailable === 'não'}
            onChange={(e) => setIsAvailable(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </FormContainer>
  </Container>
  );
}

ProductForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};

export default ProductForm;
