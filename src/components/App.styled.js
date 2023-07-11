import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Utils = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 120px;
`;

export const Text = styled.p`
color: #2a2a2a;
font-weight: 500;
font-size: 20px;
`
