import React, { useState } from "react";
import ProjectCard from "../../card/websiteCard";
import UxWorksData from "../../../utils/uxData";
import UxCard from "../../card/uxCard";

const UxWorks = () => {
  const [websites, setWebsites] = useState(UxWorksData);
  console.log(websites[0].image);
  return (
    <>
      {websites.map((website) => (
        <UxCard
          key={website.id}
          id={website.id}
          title={website.title}
          description={website.description}
          image={website.image}
        />
      ))}
    </>
  );
};

export default UxWorks;
