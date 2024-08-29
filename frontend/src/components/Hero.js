import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { useTheme } from '@mui/material/styles'; // useTheme 훅 추가

const Hero = () => {
  const [amount, setAmount] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const theme = useTheme(); // useTheme 훅 사용

  const handleSupportClick = () => {
    setAmount(inputValue);
    setInputValue('');
    alert('감사합니다. 당신의 후원이 인디문화의 발전에 소중한 기여를 했습니다.');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {  // 숫자만 허용
      setInputValue(value);
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...(theme.palette.mode === 'dark' && {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          gap: 4
        }}
      >
        <Box
          sx={{
            flex: '0 0 auto',
            width: { xs: '100%', sm: '50%' },
            textAlign: 'center',
          }}
        >
          <img
            src="https://i.pinimg.com/564x/d7/79/e4/d779e420d0d5a1a3d1dfcc1d02315935.jpg"
            alt="Movie Poster"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Box>

        <Box
          sx={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: { xs: '100%', sm: '50%' },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', width: '100%' }}
          >
            {/* 제목을 두 줄로 나누기 */}
            <Typography
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                textAlign: 'center',
                fontFamily: 'NanumSquareNeoBold', // 폰트 적용
                mb: 1 // 아래쪽 여백 추가
              }}
            >
              독립영화
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                textAlign: 'center',
                fontFamily: 'NanumSquareNeoBold', // 폰트 적용
                color: 'primary.main',
                ...(theme.palette.mode === 'dark' && {
                  color: 'primary.light',
                }),
              }}
            >
              &lt;용순&gt;의 DAO
            </Typography>

            <Typography
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                width: { sm: '100%', md: '80%' },
                fontFamily: 'NanumSquareNeoBold' // 폰트 적용
              }}
            >
              &lt;용순&gt;은 사람들의 삶과 감정의 깊이를 탐구하는 감동적인 성장 이야기입니다. 이 영화는 주인공 용순이 어려운 상황 속에서도 희망을 잃지 않고 자아를 찾아가는 여정을 담고 있습니다. 여러분의 후원은 단순한 재정적 지원을 넘어, 예술적 도전에 대한 뜨거운 응원이 될 것입니다. 후원자님의 기여로 &lt;용순&gt;이 더 많은 사람들에게 감동을 전할 수 있도록 도와주세요. 함께 해주신다면, 우리는 이 영화가 전할 수 있는 진정한 가치를 세상에 널리 알릴 수 있을 것입니다.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
            >
              <InputLabel htmlFor="amount-hero" sx={visuallyHidden}>
                Amount
              </InputLabel>
              <TextField
                id="amount-hero"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter the amount"
                placeholder="Enter amount"
                fullWidth
                value={inputValue}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ minWidth: 'fit-content' }}
                onClick={handleSupportClick}
                disabled={!inputValue}
              >
                Support
              </Button>
            </Stack>
            <Typography
              variant="h10"
              color="text.secondary"
              sx={{ textAlign: 'center' }}
            >
              현재 <span className="highlighted-text">"10ETH"</span>만큼 후원할 수 있습니다.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;