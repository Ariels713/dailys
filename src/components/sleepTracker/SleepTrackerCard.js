import styled from "styled-components";
import { useEffect, useState } from "react";
import GridItem from "../../layout/GridItem";
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 300px;
  border-radius: 30px;
  background-color: hsl(339, 86%, 71%);
  overflow: hidden;
  position: relative;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

const CardTitle = styled.div`
  padding-left: 10px;
  margin-top: -34px;
`;

const Title = styled.p`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  color: hsl(339, 55%, 99%);
  margin-bottom: -20px;
  text-align: left;
`;
const SubTitle = styled.p`
  text-align: left;
  color: hsl(339, 77%, 85%);
`;

const HoursSlept = styled.span`
  position: absolute;
  color: hsl(339, 77%, 85%);
  font-size: 5rem;
  top: 30px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 50px;
`;

const Graph = styled.div`
  width: 100%;
  margin-top: 56px;
  animation: 5s slide-right;

@keyframes slide-right {
  from {
    margin-left: -100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  };
  
`;

function SleepTrackerCard() {
  const [sleep, setSleep] = useState("");

  useEffect(() => {
    fetch("https://mockend.com/Ariels713/dailys/sleep/1")
      .then((response) => response.json())
      .then((res) => {
        setSleep(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <GridItem
      backgroundColor="hsl(191, 53%, 71%)"
      link="https://codesandbox.io/s/sleep-card-46mh0?file=/src/Card.js:0-5860"
    >
      <CardWrapper>
        <div class="info">
          <Gallery>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <title>circle-08</title>
              <g>
                <circle fill="#B3B3B3" cx="24" cy="24" r="23"></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#444444"
                  d="M14,18c0-5.52285,4.47715-10,10-10s10,4.47715,10,10v8.9934998 C34,29.2062302,32.2075272,31,30.0007706,31H17.9992294C15.7905197,31,14,29.2060509,14,26.9934998V18z"
                ></path>
                <rect
                  x="19"
                  y="24"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#EAC3A2"
                  width="10"
                  height="11.4130402"
                ></rect>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#7cd4cd"
                  d="M37.309082,35.154541L29,31c0,0-2,2-5,2s-5-2-5-2 l-8.309082,4.154541C9.1981201,35.9009399,8,37.8392944,8,39.4914551v1.0230103C12.1401367,44.5264282,17.7797241,47,24,47 s11.8598633-2.4735718,16-6.4855347v-1.0230103C40,37.8416748,38.7952271,35.897583,37.309082,35.154541z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#EAD8C5"
                  d="M16,19.5454483V21c0,4.4109097,3.5890903,8,8,8s8-3.5890903,8-8 v-1.4545517c0-1.2049789-0.9768295-2.1818199-2.1818199-2.1818199c-2.533041,0-4.730011-1.4388599-5.8181801-3.5438499 c-1.0881691,2.10499-3.2851391,3.5438499-5.8181801,3.5438499C16.9768295,17.3636284,16,18.3404694,16,19.5454483z"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <title>menu-5</title>
              <g>
                <circle fill="#ffffff" cx="24" cy="24" r="5"></circle>
                <circle fill="#ffffff" cx="6" cy="24" r="5"></circle>
                <circle fill="#ffffff" cx="42" cy="24" r="5"></circle>
              </g>
            </svg>
          </Gallery>
          <CardTitle>
            <Title class="title">Sleep Tracker</Title>
            <SubTitle>About Last Night</SubTitle>
            {!sleep ? (
              <SubTitle>Loading...</SubTitle>
            ) : (
              <HoursSlept>{sleep.message}</HoursSlept>
            )}
          </CardTitle>
        </div>
        <Graph>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 700 280">
            <path
              fill="hsl(42, 100%, 70%)"
              fillOpacity="1"
              d="M0,320L10,298.7C20,277,40,235,60,208C80,181,100,171,120,186.7C140,203,160,245,180,229.3C200,213,220,139,240,138.7C260,139,280,213,300,213.3C320,213,340,139,360,133.3C380,128,400,192,420,202.7C440,213,460,171,480,181.3C500,192,520,256,540,256C560,256,580,192,600,144C620,96,640,64,660,69.3C680,75,700,117,720,154.7C740,192,760,224,780,202.7C800,181,820,107,840,112C860,117,880,203,900,240C920,277,940,267,960,261.3C980,256,1000,256,1020,224C1040,192,1060,128,1080,90.7C1100,53,1120,43,1140,53.3C1160,64,1180,96,1200,128C1220,160,1240,192,1260,213.3C1280,235,1300,245,1320,250.7C1340,256,1360,256,1380,250.7C1400,245,1420,235,1430,229.3L1440,224L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"
            ></path>
          </svg>
        </Graph>
      </CardWrapper>
    </GridItem>
  );
}

export default SleepTrackerCard;
