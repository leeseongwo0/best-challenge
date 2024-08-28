import React, { useState } from 'react';
import './App.css';
import ConnectWalletButton from './components/ConnectWalletButton';
import TeamBuildingPage from './pages/TeamBuildingPage';
import Hero from './components/Hero';
import Features from './components/Features';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function App() {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const handlePosterClick = (item) => {
    // 포스터를 클릭하면 해당 포스터의 ID를 상태로 설정
    setSelectedPoster(item);
  };

  const handleButtonClick = (vote) => {
    // 찬성/반대 버튼 클릭 시 처리할 로직
    alert(`You voted ${vote} for Poster ${selectedPoster}`);
    // 클릭 후에는 버튼 그룹을 숨길 수도 있습니다.
    setSelectedPoster(null);
  };

  return (
    <div className="App">
      <Hero />

      <div className="heading-container">
        <h1>분기 예산 계획서</h1>
        <h1>DAO 잔고 대시보드</h1>
      </div>

      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        4 Proposals created
      </Alert>

      <div className="poster-container">
        {[1, 2, 3, 4].map((item) => (
          <div
            className="poster"
            key={item}
            onClick={() => handlePosterClick(item)}
          >
            <h2>포스터 {item}</h2>
            <p>여기에 내용을 입력하세요. 포스터 {item}의 설명이 여기에 들어갑니다.</p>
            {selectedPoster === item && (
              <div className="button-group">
                <button onClick={() => handleButtonClick('찬성')}>찬성</button>
                <button onClick={() => handleButtonClick('반대')}>반대</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;