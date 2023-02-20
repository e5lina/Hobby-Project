import styled from 'styled-components';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';

const UpdateBox = styled.main`
  height: 764px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    border: 1px solid var(--checkbutton);
    h2 {
      color: var(--checkbutton);
    }
  }
`;

const update = () => {
  const title = [
    '디자인',
    '여행',
    '게임',
    '개발',
    '음악',
    '영상',
    '외국어',
    '상담',
  ];
  // const sub = [
  //   ['1', '2'],
  //   ['3', '4'],
  // ];
  return (
    <>
      <Header />
      <UpdateBox>
        <div>
          <h2>Enrollment Your Hobby</h2>
          <select>
            {title.map(data => (
              <option>{data}</option>
            ))}
          </select>
        </div>
      </UpdateBox>
      <Footer />
    </>
  );
};

export default update;
