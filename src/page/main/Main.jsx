import styled from 'styled-components';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';

const MainBody = styled.main`
  width: 100%;
  height: 100px;
`;

const MainCont = styled.article`
  max-width: 1200px;
`;

function Main() {
  return (
    <MainBody>
      <Header />
      <MainCont />
      <Footer />
    </MainBody>
  );
}

export default Main;
