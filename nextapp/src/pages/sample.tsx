import { useEffect, useState } from "react";
import Left from "../components/Left";
import { Middle } from "../components/Middle";
import Navbar from "../components/Navbar";
import { useGetGuideMutation } from "../generated/graphql";

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

const Home = () => {
  const [, run] = useGetGuideMutation();
  const [cont, setCont] = useState([]);
  useEffect(() => {
    async () => {
      const res = await run({ title: "bruh2" });
      if (res.data?.getGuide) {
        setCont(res.data.getGuide.body as []);
      }
    };
  });
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
};

export default Home;
