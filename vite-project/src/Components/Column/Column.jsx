import Card from "..Card/Card";

export default function Column({title}) {
  return (
    <div class="main__column column">
      <div class="column__title">
        <p>{title}</p>
      </div>
      <div class="cards">
        <Card topic={"Web design"} title={"New task"}/>
        <Card topic={"Research"} title={"New task"}/>
        <Card topic={"Web design"} title={"New task"}/>
        <Card topic={"Research"} title={"New task"}/>
        <Card topic={"Web design"} title={"New task"}/>

        
      </div>
    </div>
  );
}
