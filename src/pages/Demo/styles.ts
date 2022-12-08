import { convertPixelToRem, flex } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  ${flex.middleColumn}

  h4 {
    margin-bottom: ${convertPixelToRem(20)};
  }
`;
