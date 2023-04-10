import styled from 'styled-components';

export const Container = styled.div`
  background: #813737ff;
  background: repeating-linear-gradient(
    135deg,
    #500505 17.5% 17%,
    #751b1bff 18% 18%
  );
  color: white;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  margin: auto;
  padding: 0 20px;

  box-shadow: 0 0 10px #dc460bcc, 0 0 20px #dc460bcc, 0 0 22px #dc460bcc,
    0 0 25px #dc460bcc, 0 0 30px #dc460bcc, 0 0 32px #dc460bcc,
    0 0 36px #dc460bcc, 0 0 55px #dc460bcc, 0 0 66px #dc460bcc;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 50px 50px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 50px 50px;
  }
`;
