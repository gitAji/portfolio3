import React, { useState } from "react";
import ProjectCard from "../../card/websiteCard";
import PaidWorksData from "../../../utils/paidData";

const PaidWorks = () => {
  const [websites, setWebsites] = useState(PaidWorksData);
  console.log(setWebsites);
  console.log(websites[0].image);
  return (
    <>
      {websites.map((website) => (
        <ProjectCard
          key={website.id}
          id={website.id}
          title={website.title}
          description={website.description}
          image={website.image}
          requirements={website.requirements}
          deliverables={website.deliverables}
          technologies={website.technologies}
          tools={website.tools}
          github={website.github_link}
          live={website.live_demo}
        />
      ))}
    </>
  );
};

export default PaidWorks;
