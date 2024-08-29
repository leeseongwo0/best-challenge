import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function App() {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [moreInfoClicked, setMoreInfoClicked] = useState(null);

  // 포스터 데이터 배열
  const posters = [
    { id: 1, name: 'Insoma', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5006f9a984ae2a41e73ba834/1395792354190-01TPJBZQKPC4CDMA430X/Insoma_Profile_Poster_24x36_Yellow_FullCredits.jpg?format=1000w'},
    { id: 2, name: 'NomadLand', imageUrl: 'https://i.pinimg.com/564x/7a/44/17/7a441783fe4fe286ff9633b6f5befbf9.jpg'},
    { id: 3, name: 'The Dig', imageUrl: 'https://i.pinimg.com/564x/03/65/ea/0365ea06ab50757e35c204cace62b0e2.jpg'},
    { id: 4, name: 'The Turin Horse', imageUrl: 'https://i.pinimg.com/564x/0d/a5/65/0da5658bd63940a2385bc98501939bfe.jpg'}
  ];

  const handlePosterClick = (item) => {
    setSelectedPoster(item);
    setThankYouMessage(false); // 포스터 클릭 시 메시지 숨기기
    setMoreInfoClicked(null); // "더 알아보기" 클릭 상태 초기화
  };

  const handleButtonClick = (vote) => {
    setThankYouMessage(true); // 버튼 클릭 시 메시지 상태 업데이트
    setSelectedPoster(null); // 버튼 그룹 숨기기

    if (vote === '찬성') {
      alert('감사합니다. 당신의 후원이 인디문화의 발전에 소중한 기여를 했습니다.');
    }
  };

  const handleMoreInfoClick = (id) => {
    setMoreInfoClicked(id);
    setSelectedPoster(null); // "더 알아보기" 클릭 시 포스터 선택 해제
  };

  return (
    <div className="App">
      <Hero />

      <div className="heading-container">
        <h1>분기 예산 계획서</h1>
        <h1>DAO 잔고 대시보드</h1>
      </div>

      <div className="alert-container">
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          4 Proposals created
        </Alert>
      </div>

      <div className="poster-container">
        {posters.map((poster) => (
          <div
            className="poster"
            key={poster.id}
            onClick={() => handlePosterClick(poster.id)}
          >
            <img
              src={poster.imageUrl}
              alt={`Poster ${poster.id}`}
              className="poster-image"
            />
            <h2 className="poster-title">{poster.name}</h2>
            {selectedPoster === poster.id && !thankYouMessage && !moreInfoClicked && (
              <div className="button-group">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick('찬성')}
                >
                  찬성
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleButtonClick('반대')}
                >
                  반대
                </Button>
              </div>
            )}
            {selectedPoster === poster.id && !thankYouMessage && !moreInfoClicked && (
              <div
                className="more-info"
                onClick={() => handleMoreInfoClick(poster.id)}
              >
                > 더 알아보기
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;