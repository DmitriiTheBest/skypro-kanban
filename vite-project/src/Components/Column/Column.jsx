import Card from "../Card/Card";

import * as S from "./Column.styled"; 

export default function Column({ title, cardList }) {
  return (
    <S.MainColumnStyled>
      <S.ColumnTitleStyled>
        <S.ColumnTitleTextStyled>{title}</S.ColumnTitleTextStyled>
      </S.ColumnTitleStyled>
      <S.CardsStyled>
        {/* Вызываем компонент Card и передаем в него данные из cardList */}
        {cardList.map((card) => <Card topic={card.topic} title={card.title} date={card.date} key={card.id} />)}
        {/* <Card topic={"Web design"} title={"New task"} />
        <Card topic={"Research"} title={"New task"} />
        <Card topic={"Web design"} title={"New task"} />
        <Card topic={"Research"} title={"New task"} />
        <Card topic={"Web design"} title={"New task"} /> */} 
      </S.CardsStyled>
    </S.MainColumnStyled> 
  )
}
