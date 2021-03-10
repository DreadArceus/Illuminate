import Left from "../components/Left";
import { Middle } from "../components/Middle";
import Navbar from "../components/Navbar";

const stockContents = [
  { content: "Bruh Moment", classes: "top", key: "2" },
  {
    content: [
      { content: "Bruh Moment", classes: "box", key: "2" },
      {
        content: `() => <div>Bruh Moment</div>;`,
        classes: "code",
        key: "5",
        codeOptions: { enable: true },
      },
    ],
    classes: "block",
    key: "5",
  },
  {
    content: "()=><div>BRUH Moment</div>",
    classes: "ide",
    key: "1",
    codeOptions: { enable: true },
  },
  { content: "Bruh Moment", classes: "boxs", key: "0" },
];

function Home() {
  return (
    <div className="pepew">
      <div className="container">
        <Navbar />
        <div className="main">
          <Left />
          <Middle contents={stockContents} />
        </div>
      </div>
    </div>
  );
}
export default Home;
