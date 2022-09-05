import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 10px;
  border-width: 4px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.secondary.main};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 20px;
`;

export const Name = styled(Title)`
  font-size: 30px;
`;
