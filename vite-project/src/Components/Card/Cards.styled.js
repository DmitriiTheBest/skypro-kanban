import styled from "styled-components"; // создаем styled-component для компонента Cards (компонент Card)

export const TopicText = styled.p` // создаем styled-component для p (параграф) Topic 
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTopic = styled.div` // создаем styled-component для div CardTheme 
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topicColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#b4fdd1"};

  ${TopicText} {
    color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
  }
`;