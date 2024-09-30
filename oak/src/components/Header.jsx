import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.img`
  max-width: 100px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="./imgs/oak-logo.jpeg" alt="logo" />
    </HeaderContainer>
  );
}

export default Header;
