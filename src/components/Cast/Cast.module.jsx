import styled from '@emotion/styled';

export const ListItem = styled.li`
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  min-width: 182px;
  border-radius: 14px;
  background-color: #2a2a2a;

  img {
    max-width: 182px;
    border-radius: 8px;
  }

  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;

  margin-top: 12px;
`;
