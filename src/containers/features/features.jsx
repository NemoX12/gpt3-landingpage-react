import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving end distrusts instantly ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia quos eveniet, consequuntur eos illum ducimus.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia quos eveniet, consequuntur eos illum ducimus.",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia quos eveniet, consequuntur eos illum ducimus.",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia quos eveniet, consequuntur eos illum ducimus.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        =
        {featuresData.map((d, k) => {
          return <Feature title={d.title} text={d.text} key={d.title + k} />;
        })}
      </div>
    </div>
  );
};

export default Features;
