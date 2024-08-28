import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';

const Hero = () => {
  const [amount, setAmount] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const handleSupportClick = () => {
    // 입력 필드를 비우고 알림 창을 표시
    setAmount(inputValue);
    setInputValue('');
    alert('감사합니다. 당신의 후원이 인디문화의 발전에 소중한 기여를 했습니다.');
  };

  const handleInputChange = (e) => {
    // 입력 필드에서 숫자만 허용
    const value = e.target.value;
    if (/^\d*$/.test(value)) {  // 숫자만 허용
      setInputValue(value);
    }
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Our&nbsp;latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              products
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            독립영화 "사라진 인연"은 일상의 비밀스러운 교차로에서 마주치는 예기치 못한 인연을 탐구하는 독창적인 작품입니다.
            이 영화는 잊혀진 순간들이 현재를 어떻게 변화시킬 수 있는지를 신비롭고도 창의적으로 풀어내며,
            깊은 감동과 놀라운 반전을 제공합니다.
            이 특별한 프로젝트가 성공적으로 완성되기 위해서는 여러분의 지원이 필요합니다.
            후원자님의 소중한 기여는 영화의 제작과 홍보에 큰 힘이 될 것이며,
            저희가 꿈꾸는 새로운 차원의 이야기를 많은 이들에게 전할 수 있도록 도와줄 것입니다.
            함께 이 여정을 만들어가며, 감동적인 작품을 세상에 선보일 수 있도록 도와주십시오.
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
              disabled={!inputValue} // 빈 값이면 버튼 비활성화
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
      </Container>
    </Box>
  );
};

export default Hero;