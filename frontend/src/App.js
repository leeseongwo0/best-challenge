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
    { id: 1, name: 'Insoma', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5006f9a984ae2a41e73ba834/1395792354190-01TPJBZQKPC4CDMA430X/Insoma_Profile_Poster_24x36_Yellow_FullCredits.jpg?format=1000w', description: '희망금액 : 1ETH'},
    { id: 2, name: 'NomadLand', imageUrl: 'https://i.pinimg.com/564x/7a/44/17/7a441783fe4fe286ff9633b6f5befbf9.jpg', description: '희망금액 : 3ETH'},
    { id: 3, name: 'The Dig', imageUrl: 'https://i.pinimg.com/564x/03/65/ea/0365ea06ab50757e35c204cace62b0e2.jpg', description: '희망금액 : 2ETH'},
    { id: 4, name: 'The Turin Horse', imageUrl: 'https://i.pinimg.com/564x/0d/a5/65/0da5658bd63940a2385bc98501939bfe.jpg', description: '희망금액 : 0.5ETH'}
  ];

  const handlePosterClick = (id) => {
    if (selectedPoster === id) {
      setSelectedPoster(null);
    } else {
      setSelectedPoster(id);
    }
    setThankYouMessage(false);
    setMoreInfoClicked(null);
  };

  const handleButtonClick = (vote) => {
    setThankYouMessage(true);
    setSelectedPoster(null);

    if (vote === '찬성') {
      alert('후원금 분기 예산 사용 계획에 동의하셨습니다.');
    }
  };

  const handleMoreInfoClick = (id) => {
    setMoreInfoClicked(id);
    setSelectedPoster(null);
  };

  const handleHeadingBoxClick = () => {
    // 새 탭에서 proposal.html 열기
    window.open('/proposal.html', '_blank');
  };

  return (
    <div className="App">
      <Hero />

      <div className="heading-container">
        <div className="heading-box vertical">
        <div className="heading-box-item no-click">
          <h2>Quarterly Budget Plan</h2>
        </div>
          <div className="heading-box-item" onClick={handleHeadingBoxClick}>
            <h2>계획서 항목 2</h2>
            <p>여기에 항목 2에 대한 내용을 입력하세요.</p>
          </div>
          <div className="heading-box-item">
            <h2>계획서 항목 3</h2>
            <p>여기에 항목 3에 대한 내용을 입력하세요.</p>
            {/* > 더보기 버튼 추가 */}
          </div>
          <div
              className="more-info"
              onClick={() => handleMoreInfoClick(3)}
            >
              > 더보기
          </div>
        </div>
        <div className="heading-box">
          <h1>DAO 잔고 대시보드</h1>
          <p>추가 설명 두 줄을 여기에 입력할 수 있습니다.</p>
        </div>
      </div>

      <div className="alert-container">
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="info"
          sx={{
            backgroundColor: '#1976d2',
            color: '#ffffff',
            fontSize: '1.25rem',
            '& .MuiAlert-icon': {
              color: '#ffffff',
            },
          }}
        >
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
            <p className="poster-description">{poster.description}</p>
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