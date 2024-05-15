import Card from "../Card/Card";
import * as S from "./Column.styled";
import { format } from "date-fns";

export default function Column({ title, cardList }) {
  return (
    <S.MainColumnStyled>
      <S.ColumnTitleStyled>
        <S.ColumnTitleTextStyled>{title}</S.ColumnTitleTextStyled>
      </S.ColumnTitleStyled>
      <S.CardsStyled>
        {cardList.map((card) => (
          <Card
            topic={card.topic}
            title={card.title}
            date={format(card.date, "dd.MM.yy")}
            key={card._id}
            id={card._id}
          />
        ))}
      </S.CardsStyled>
    </S.MainColumnStyled>
  );
}

// done 
