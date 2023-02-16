import styled from 'styled-components';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';

const MainBody = styled.main`
  width: 100%;
  height: 300px;
  border: 1px solid red;
`;

function Main() {
  return (
    <MainBody>
      <Header />
      <Footer />
    </MainBody>
  );
}

export default Main;
