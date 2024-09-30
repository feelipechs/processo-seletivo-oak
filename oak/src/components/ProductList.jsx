import styled from 'styled-components';
import { Button, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from './Header'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
`

const ListContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const ProductList = ({ products }) => {
  const navigate = useNavigate(); 
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  return (
    <Container>
      <Header />
      <ListContainer>
        <Button variant="primary" onClick={() => navigate('/product-form')} style={{ marginBottom: '10px' }}>
          Cadastrar Novo Produto
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>R${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ListContainer>
    </Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      available: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ProductList;
