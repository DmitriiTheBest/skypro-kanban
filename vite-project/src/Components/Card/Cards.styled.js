import styled from "styled-components"; // импортируем styled-component
import { topicStyles } from "../../lib/topic"; // импортируем объект в котором содержатся стили для лейблов карточек

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
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${TopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  }
`;