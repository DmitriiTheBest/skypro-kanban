import Card from "../Card/Card";

export default function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card topic={"Web design"} title={"New task"} />
        <Card topic={"Research"} title={"New task"} />
        <Card topic={"Web design"} title={"New task"} />
        <Card topic={"Research"} title={"New task"} />
        <Card topic={"Web design"} title={"New task"} />
      </div>
    </div>
  );
}
