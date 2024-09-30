import Header from './Header';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="primary" onClick={() => navigate('/product-form')}>
          Cadastro de Produtos
        </Button>
        <Button variant="secondary" onClick={() => navigate('/product-list')} style={{ marginLeft: '10px' }}>
          Listagem de Produtos
        </Button>
      </div>
    </div>
  );
}

export default Home;
