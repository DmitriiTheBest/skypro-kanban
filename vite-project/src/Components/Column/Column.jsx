import Card from "../Card/Card";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {/* Вызываем компонент Card и передаем в него данные из cardList */}
        {cardList.map((card) => <Card topic={card.topic} title={card.title} key={card.id} />)}
        {/* <Card topic={"Web design"} title={"New task"} />
        <Card topic={"Research"} title={"New task"} />
        <Card topic={"Web design"} title={"New task"} />
        <Card topic={"Research"} title={"New task"} />
        <Card topic={"Web design"} title={"New task"} /> */} 
      </div>
    </div>
  )
}
