import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Button from '@mui/material/Button';

function App() {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handlePosterClick = (item) => {
    setSelectedPoster(item);
    setThankYouMessage(false); // 포스터 클릭 시 메시지 숨기기
  };

  const handleButtonClick = (vote) => {
    setThankYouMessage(true); // 버튼 클릭 시 메시지 상태 업데이트
    setSelectedPoster(null); // 버튼 그룹 숨기기
    alert('감사합니다. 당신의 후원이 인디문화의 발전에 소중한 기여를 했습니다.');
  };

  return (
    <div className="App">
      <Hero />

      <div className="heading-container">
        <h1>분기 예산 계획서</h1>
        <h1>DAO 잔고 대시보드</h1>
      </div>

      <div className="poster-container">
        {[1, 2, 3, 4].map((item) => (
          <div
            className="poster"
            key={item}
            onClick={() => handlePosterClick(item)}
          >
            <h2>포스터 {item}</h2>
            <p>여기에 내용을 입력하세요. 포스터 {item}의 설명이 여기에 들어갑니다.</p>
            {selectedPoster === item && !thankYouMessage && (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;