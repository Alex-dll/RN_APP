import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors?.primary};
  padding: 10px;
  border-width: 4px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors?.secondary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors?.onPrimary};
  font-size: 20px;
`;

export const Name = styled(Title)`
  font-size: 30px;
`;
