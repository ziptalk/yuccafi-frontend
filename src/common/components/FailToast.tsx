import { keyframes } from '@emotion/react';
// import { ToastContainerProps } from '../types/toastTypes';
import styled from '@emotion/styled';
import { IcFail } from '../assets/0_index';
import { transformStyles } from '../styles/transformStyles';
//{ message }: ToastContainerProps
const FailToast = ({ message }: { message: string }) => {
  // if (!message) return null;
  return (
    <StToastContainer>
      <StToastWrapper>
        <IcFail />
        {message}
      </StToastWrapper>
    </StToastContainer>
  );
};

export default FailToast;

const slideInDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StToastContainer = styled.div`
  position: fixed;
  top: 3rem;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  display: flex;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.not_important};

  animation: ${slideInDown} 1s ease-out;
`;

const StToastWrapper = styled.div`
  position: relative;
  width: 48.8rem;
  height: 10rem;
  border-radius: 16px;
  background: rgba(79, 79, 79, 0.5);
  ${({ theme }) => theme.fonts.body_3m};
  color: ${({ theme }) => theme.colors.sub_white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  ${transformStyles}
`;
