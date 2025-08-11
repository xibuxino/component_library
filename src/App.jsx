import { useState } from "react";
import "./App.css";
import { Badge } from "./components/badge/index.jsx";
import { Banner } from "./components/banner/index.jsx";
import { Card } from "./components/card/Card.jsx";
import { HiMiniCloud } from "react-icons/hi2";
import { Testimonial } from "./components/testimonial/Testimonial.jsx";
import { Tooltip } from "./components/tooltip/Tooltip.jsx";

function App() {
  return (
    <>
      <div className="example-row">
        <Badge
          color="red"
          variant="square"
        >
          Red square
        </Badge>

        <Badge
          color="yellow"
          variant="pill"
        >
          Yellow pill
        </Badge>
      </div>
      <div className="example-column">
        <Banner status="success">
          <Banner.Text>
            <Banner.Title>Congratulations!</Banner.Title>
            <Banner.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </Banner.Description>
          </Banner.Text>
        </Banner>
        <Banner status="warning">
          <Banner.Text>
            <Banner.Title>Attention</Banner.Title>
            <Banner.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </Banner.Description>
          </Banner.Text>
        </Banner>
        <Banner status="error">
          <Banner.Text>
            <Banner.Title>
              There is a problem with your application
            </Banner.Title>
            <Banner.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </Banner.Description>
          </Banner.Text>
        </Banner>
        <Banner status="info">
          <Banner.Text>
            <Banner.Title>Update available</Banner.Title>
            <Banner.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid pariatur, ipsum similique
              veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid pariatur, ipsum similique veniam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aliquid pariatur, ipsum
              similique veniam.
            </Banner.Description>
          </Banner.Text>
        </Banner>
      </div>
      <div className="example-row">
        <Card
          width="lg"
          height="auto"
          icon=<HiMiniCloud />
          title="Easy Deployment"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
        />
        <Card
          width="sm"
          height="auto"
          title="Easy Deployment"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. "
        />
      </div>
      <div className="example-column">
        <Testimonial
          theme="dark"
          photo="src/components/testimonial/img/woman_profile.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
          name="May Andersons"
          company="Workcation"
          role="CTO"
          // logo='src/components/testimonial/img/Logo.png'
        />
        <Testimonial
          theme="light"
          // photo='src/components/testimonial/img/woman_profile.jpg'
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
          name="May Andersons"
          company="Workcation"
          role="CTO"
          logo="src/components/testimonial/img/Logo.png"
        />
      </div>
      <div className="example-row">
        <Tooltip
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."
          variant="light"
          color="purple"
          size="sm"
          tail="left"
        />
        <Tooltip
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."
          variant="light"
          color="default"
          size="md"
          tail="right"
        />
        <Tooltip
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."
          variant="light"
          color="blue"
          size="lg"
        />
        <Tooltip
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."
          variant="light"
          color="green"
          size="lg"
        />
        <Tooltip
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."
          variant="bold"
          color="purple"
          size="lg"
        />
        <Tooltip
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."
          variant="bold"
          color="default"
          size="lg"
          tail="center"
        />
        <Tooltip
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."
          variant="bold"
          color="blue"
          size="lg"
          tail="right"
        />
        <Tooltip
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."
          variant="bold"
          color="green"
          size="lg"
          tail="none"
        />
        <Tooltip
          title="Ola"
          text="to jest jakiś testowy tekst "
          size="lg"
          variant="light"
        />
      </div>
    </>
  );
}

export default App;
