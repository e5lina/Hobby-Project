import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import camera from '../../image/camera.png';
import UpdateBox from './updateStyle';

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
  return (
    <>
      <Header />
      <UpdateBox>
        <div>
          <h2>Enrollment Your Hobby</h2>
          <div>
            <select>
              {title.map(data => (
                <option>{data}</option>
              ))}
            </select>
            <select>
              {title.map(data => (
                <option>{data}</option>
              ))}
            </select>
          </div>
          <div className="textinbox">
            <input placeholder="제목을 입력해주세요." className="titlebox" />
            <textarea placeholder="내용을 입력해주세요." className="textarea" />
            <button type="button" className="imgbtn">
              <img src={camera} alt="이미지 등록 버튼" />
              이미지 등록
            </button>
            <button type="button" className="btn">
              등록하기
            </button>
          </div>
        </div>
      </UpdateBox>
      <Footer />
    </>
  );
};

export default update;
