import { useMachine } from "@xstate/react";
import styled from "styled-components";
import "./boomBoxstyles.css";
import useSound from "use-sound";
import boomBoxMachine from "./boomboxMachine";
import press_play from "./sounds/mouse_click.wav";
import press_stop from "./sounds/mouse_click_alt.wav";
import press_rewind from "./sounds/rewindSound.mp3";
import icecream from "./sounds/ice_cream.mp3";
import GridItem from "../../layout/GridItem";
import Interactive from "../../layout/InteractiveIcon";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

function Boombox() {
  const [current, send] = useMachine(boomBoxMachine);
  const [playButton] = useSound(press_play);
  const [stopButton] = useSound(press_stop);
  const [rewindButton] = useSound(press_rewind);
  const [song1, { stop }] = useSound(icecream);

  const playMusic = (event) => {
    setTimeout(send("PLAY_MUSIC"), 3000);
    // send("PLAY_MUSIC");
    playButton();
    setTimeout(song1, 300);
  };

  const stopMusic = (event) => {
    send("STOP_MUSIC");
    stopButton();
    stop();
  };

  const rewindMusic = (event) => {
    send("REWIND_MUSIC");
    rewindButton();
    stop();
  };

  const forwardMusic = (event) => {
    send("FAST_FORWARD");
    rewindButton();
    stop();
  };

  const turnOff = (event) => {
    send("TURN_OFF");
    stop();
  };

  return (
    <>
      <GridItem>
        <Interactive />
        <Wrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 508 508"
          >
            <title>boomBox</title>
            <g fill="none">
              <g id="boomBox2 1">
                <path
                  id="Path"
                  d="M2 236v168c0 12 12 24 24 24h456c12 0 20-12 20-24V236H2z"
                  fill="#ef476f"
                ></path>
                <path
                  id="Path-1"
                  d="M482 148H26c-12 0-24 8-24 20v68h500v-68c0-12-8-20-20-20z"
                  fill="#43a1d4"
                ></path>
                <path
                  id="Path-9"
                  d="M376 80H136c-22 0-42 14-42 34v30h12v-30c0-15.2 16.4-22 30-22h240c14.4 0 22 7.6 22 22v30h12v-30c0-20.8-13.2-34-34-34z"
                  fill="#ffd166"
                ></path>
                <path
                  id="Path-15"
                  d="M480 434H24c-14.4 0-24-10.8-24-28V170c0-17.2 9.6-28 24-28h456c15.6 0 28 12.4 28 28v236c0 15.6-12.4 28-28 28zM24 150c-14.8 0-16 15.2-16 20v236c0 4.8 1.2 20 16 20h456c11.2 0 20-8.8 20-20V170c0-11.2-8.8-20-20-20H24z"
                  fill="#073b4c"
                ></path>
                <g
                  id="leftSpeaker"
                  className="leftSpeaker"
                  data-state={current.value}
                >
                  <path
                    id="Path-16"
                    d="M98 398c-38.4 0-70-31.6-70-70s31.6-70 70-70 70 31.6 70 70-31.6 70-70 70zm0-132c-34 0-62 28-62 62s28 62 62 62 62-28 62-62-28-62-62-62z"
                    fill="#073b4c"
                  ></path>
                  <path
                    id="Path-2"
                    d="M98 264c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z"
                    fill="#06d6a0"
                  ></path>
                  <path
                    id="Path-4"
                    d="M98 284c-24.4 0-44 19.6-44 44s19.6 44 44 44 44-19.6 44-44-19.6-44-44-44z"
                    fill="#ffd166"
                  ></path>
                  <path
                    id="Path-18"
                    d="M98 378c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50zm0-92c-23.2 0-42 18.8-42 42s18.8 42 42 42 42-18.8 42-42-18.8-42-42-42z"
                    fill="#073b4c"
                  ></path>
                </g>
                <g
                  id="rightSpeaker"
                  className="rightSpeaker"
                  data-state={current.value}
                >
                  <path
                    id="Path-17"
                    d="M414 398c-38.4 0-70-31.6-70-70s31.6-70 70-70 70 31.6 70 70-31.6 70-70 70zm0-132c-34 0-62 28-62 62s28 62 62 62 62-28 62-62-28-62-62-62z"
                    fill="#073b4c"
                  ></path>
                  <path
                    id="Path-3"
                    d="M414 264c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z"
                    fill="#06d6a0"
                  ></path>
                  <path
                    id="Path-6"
                    d="M414 284c-24.4 0-44 19.6-44 44s19.6 44 44 44 44-19.6 44-44-19.6-44-44-44z"
                    fill="#ffd166"
                  ></path>
                  <path
                    id="Path-19"
                    d="M414 378c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50zm0-92c-23.2 0-42 18.8-42 42s18.8 42 42 42 42-18.8 42-42-18.8-42-42-42z"
                    fill="#073b4c"
                  ></path>
                </g>
                <path
                  id="Path-23"
                  d="M446 238H6c-2.4 0-4-1.6-4-4s1.6-4 4-4h440c2.4 0 4 1.6 4 4s-1.6 4-4 4z"
                  fill="#073b4c"
                ></path>
                <path
                  id="Path-24"
                  d="M502 238h-24c-2.4 0-4-1.6-4-4s1.6-4 4-4h24c2.4 0 4 1.6 4 4s-1.6 4-4 4z"
                  fill="#073b4c"
                ></path>
                <g id="Volume">
                  <path
                    id="Path-10"
                    d="M44 168c-10 0-18 8-18 18s8 18 18 18 18-8 18-18-8-18-18-18z"
                    fill="#ef476f"
                  ></path>
                  <g id="Volume_2">
                    <path
                      id="Path-25"
                      d="M44 210c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zm0-40c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"
                      fill="#073b4c"
                    ></path>
                  </g>
                  <path
                    id="Path-29"
                    d="M41.184 185.533l-.179-15.995c-.003-.29.957-.495 2.4-.511 1.444-.016 2.408.167 2.411.458l.179 15.995c.003.291-.957.495-2.4.511-1.444.016-2.408-.167-2.411-.458z"
                    fill="#073b4c"
                  ></path>
                </g>
                <g
                  id="stopButton"
                  name="stopButon"
                  className="stopButton"
                  onClick={stopMusic}
                >
                  <path
                    id="Path-12"
                    d="M174 184h-12c-3.2 0-6 2.8-6 6s2.8 6 6 6h12c2.8 0 5.6-3.2 6-6v-.4c0-3.6-2.8-5.6-6-5.6z"
                    fill="#06d6a0"
                  ></path>
                  <path
                    id="Path-27"
                    d="M172 202h-12c-6.8 0-12-5.2-12-12s5.2-12 12-12h12c6.8 0 12 5.2 12 12s-5.2 12-12 12zm-12-16c-2.4 0-4 1.6-4 4s1.6 4 4 4h12c2.4 0 4-1.6 4-4s-1.6-4-4-4h-12z"
                    fill="#073b4c"
                  ></path>
                  <path
                    id="Path-27_2"
                    d="M172 202h-12c-6.8 0-12-5.2-12-12s5.2-12 12-12h12c6.8 0 12 5.2 12 12s-5.2 12-12 12zm-12-16c-2.4 0-4 1.6-4 4s1.6 4 4 4h12c2.4 0 4-1.6 4-4s-1.6-4-4-4h-12z"
                    fill="#073b4c"
                  ></path>
                </g>
                <g
                  id="playButton"
                  name="playButton"
                  className="playButton"
                  onClick={playMusic}
                >
                  <path
                    id="Path-12_2"
                    d="M124 184h-12c-3.2 0-6 2.8-6 6s2.8 6 6 6h12c2.8 0 5.6-3.2 6-6v-.4c0-3.6-2.8-5.6-6-5.6z"
                    fill="#06d6a0"
                  ></path>
                  <path
                    id="Path-27_3"
                    d="M122 202h-12c-6.8 0-12-5.2-12-12s5.2-12 12-12h12c6.8 0 12 5.2 12 12s-5.2 12-12 12zm-12-16c-2.4 0-4 1.6-4 4s1.6 4 4 4h12c2.4 0 4-1.6 4-4s-1.6-4-4-4h-12z"
                    fill="#073b4c"
                  ></path>
                </g>
                <g
                  id="fastForward"
                  name="fastForward"
                  className="fastForward"
                  onClick={forwardMusic}
                >
                  <path
                    id="Path-12_3"
                    d="M226.25 184h-13.5c-3.6 0-6.75 2.8-6.75 6s3.15 6 6.75 6h13.5c3.15 0 6.3-3.2 6.75-6v-.4c0-3.6-3.15-5.6-6.75-5.6z"
                    fill="#06d6a0"
                  ></path>
                  <path
                    id="Path-27_4"
                    d="M224 202h-13c-7.367 0-13-5.2-13-12s5.633-12 13-12h13c7.367 0 13 5.2 13 12s-5.633 12-13 12zm-13-16c-2.6 0-4.333 1.6-4.333 4s1.733 4 4.333 4h13c2.6 0 4.333-1.6 4.333-4s-1.733-4-4.333-4h-13z"
                    fill="#073b4c"
                  ></path>
                </g>
                <g
                  id="rewind"
                  name="rewind"
                  className="rewind"
                  onClick={rewindMusic}
                >
                  <path
                    id="Path-12_4"
                    d="M274 184h-12c-3.2 0-6 2.8-6 6s2.8 6 6 6h12c2.8 0 5.6-3.2 6-6v-.4c0-3.6-2.8-5.6-6-5.6z"
                    fill="#06d6a0"
                  ></path>
                  <path
                    id="Path-27_5"
                    d="M272 202h-12c-6.8 0-12-5.2-12-12s5.2-12 12-12h12c6.8 0 12 5.2 12 12s-5.2 12-12 12zm-12-16c-2.4 0-4 1.6-4 4s1.6 4 4 4h12c2.4 0 4-1.6 4-4s-1.6-4-4-4h-12z"
                    fill="#073b4c"
                  ></path>
                </g>
                <path
                  id="Antenna"
                  d="M462.984 142.664V28.531c0-2.075 1.823-3.458 4.558-3.458 2.734 0 4.557 1.383 4.557 3.458v114.133c0 2.075-1.823 3.458-4.557 3.458-2.735 0-4.558-1.383-4.558-3.458z"
                  fill="#073b4c"
                ></path>
                <path
                  id="Path-20"
                  d="M312 374H192c-2.4 0-4-1.6-4-4v-72c0-2.4 1.6-4 4-4h120c2.4 0 4 1.6 4 4v72c0 2.4-1.6 4-4 4zm-116-8h112v-64H196v64z"
                  fill="#073b4c"
                ></path>
                <path
                  id="Path-5"
                  d="M310 368v-68H194v68h116z"
                  fill="#43a1d4"
                ></path>
                <path
                  id="Path-29_2"
                  d="M313.486 358h-49.972c-.908 0-1.514-1.6-1.514-4s.606-4 1.514-4h49.972c.908 0 1.514 1.6 1.514 4s-.606 4-1.514 4z"
                  fill="#073b4c"
                ></path>
                <g id="Power" data-state={current.value} onClick={turnOff}>
                  <path
                    id="Path-10_2"
                    d="M473.5 174c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5 13.5-6 13.5-13.5-6-13.5-13.5-13.5z"
                    fill="#ef476f"
                  ></path>
                  <path
                    id="Path-25_2"
                    d="M473.5 206c-10.175 0-18.5-8.1-18.5-18s8.325-18 18.5-18 18.5 8.1 18.5 18-8.325 18-18.5 18zm0-30c-6.783 0-12.333 5.4-12.333 12s5.55 12 12.333 12 12.333-5.4 12.333-12-5.55-12-12.333-12z"
                    fill="#073b4c"
                  ></path>
                  <path
                    id="Path-29_3"
                    d="M471.184 195.533l-.179-15.995c-.003-.29.957-.495 2.4-.511 1.443-.016 2.408.167 2.411.458l.179 15.995c.003.291-.957.495-2.4.511-1.443.016-2.408-.167-2.411-.458z"
                    fill="#073b4c"
                  ></path>
                </g>
                <g id="speaker">
                  <path
                    id="Path-28"
                    d="M421.886 174H319.114c-1.868 0-3.114-1.6-3.114-4s1.246-4 3.114-4h102.772c1.868 0 3.114 1.6 3.114 4s-1.246 4-3.114 4z"
                    fill="#073b4c"
                  ></path>
                  <path
                    id="Path-29_4"
                    d="M421.886 214H319.114c-1.868 0-3.114-1.6-3.114-4s1.246-4 3.114-4h102.772c1.868 0 3.114 1.6 3.114 4s-1.246 4-3.114 4z"
                    fill="#073b4c"
                  ></path>
                  <path
                    id="Path-30"
                    d="M431.886 194H329.114c-1.868 0-3.114-1.6-3.114-4s1.246-4 3.114-4h102.772c1.868 0 3.114 1.6 3.114 4s-1.246 4-3.114 4z"
                    fill="#073b4c"
                  ></path>
                </g>
                <path
                  id="Path-31"
                  d="M412 148c-2.4 0-4-1.6-4-4v-30c0-19.6-12.4-32-32-32H136c-19.6 0-40 12-40 32v26c0 2.4-1.6 4-4 4s-4-1.6-4-4v-26c0-25.2 24.4-40 48-40h240c24.4 0 40 15.6 40 40v30c0 2.4-1.6 4-4 4zm-16 0c-2.4 0-4-1.6-4-4v-30c0-11.2-4.8-16-16-16H136c-11.6 0-24 5.6-24 16v26c0 2.4-1.6 4-4 4s-4-1.6-4-4v-26c0-15.6 16.4-24 32-24h240c15.6 0 24 8.4 24 24v30c0 2.4-1.6 4-4 4z"
                  fill="#073b4c"
                ></path>
                <g
                  className="cassette-left"
                  data-state={current.value}
                  id="cassette-right"
                >
                  <path
                    id="Path-7"
                    d="M289 326c0 4.419-3.805 8-8.5 8s-8.5-3.581-8.5-8c0-4.419 3.805-8 8.5-8s8.5 3.581 8.5 8z"
                    fill="#06d6a0"
                  ></path>
                  <path
                    id="Path-21"
                    d="M281 342c-9.633 0-17-6.933-17-16s7.367-16 17-16 17 6.933 17 16-7.367 16-17 16zm0-21.333c-3.4 0-5.667 2.133-5.667 5.333s2.267 5.333 5.667 5.333 5.667-2.133 5.667-5.333-2.267-5.333-5.667-5.333z"
                    fill="#073b4c"
                  ></path>
                  <g id="Path-29_5">
                    <path
                      d="M290.429 328h-18.858c-.342 0-.571-.8-.571-2s.229-2 .571-2h18.858c.342 0 .571.8.571 2s-.229 2-.571 2z"
                      fill="#06d6a0"
                    ></path>
                    <path
                      d="M290.429 328h-18.858c-.342 0-.571-.8-.571-2s.229-2 .571-2h18.858c.342 0 .571.8.571 2s-.229 2-.571 2z"
                      fill="#06d6a0"
                    ></path>
                    <path
                      d="M290.429 328h-18.858c-.342 0-.571-.8-.571-2s.229-2 .571-2h18.858c.342 0 .571.8.571 2s-.229 2-.571 2z"
                      fill="#06d6a0"
                    ></path>
                  </g>
                  <g id="Path-29_6">
                    <path
                      d="M279 335.429v-18.858c0-.342.8-.571 2-.571s2 .229 2 .571v18.858c0 .342-.8.571-2 .571s-2-.229-2-.571z"
                      fill="#06d6a0"
                    ></path>
                    <path
                      d="M279 335.429v-18.858c0-.342.8-.571 2-.571s2 .229 2 .571v18.858c0 .342-.8.571-2 .571s-2-.229-2-.571z"
                      fill="#06d6a0"
                    ></path>
                    <path
                      d="M279 335.429v-18.858c0-.342.8-.571 2-.571s2 .229 2 .571v18.858c0 .342-.8.571-2 .571s-2-.229-2-.571z"
                      fill="#06d6a0"
                    ></path>
                  </g>
                </g>
                <g
                  className="cassette-left"
                  data-state={current.value}
                  id="cassette-left"
                >
                  <path
                    id="Path-7_2"
                    d="M229 326c0 4.419-3.805 8-8.5 8s-8.5-3.581-8.5-8c0-4.419 3.805-8 8.5-8s8.5 3.581 8.5 8z"
                    fill="#06d6a0"
                  ></path>
                  <path
                    id="Path-21_2"
                    d="M221 342c-9.633 0-17-6.933-17-16s7.367-16 17-16 17 6.933 17 16-7.367 16-17 16zm0-21.333c-3.4 0-5.667 2.133-5.667 5.333s2.267 5.333 5.667 5.333 5.667-2.133 5.667-5.333-2.267-5.333-5.667-5.333z"
                    fill="#073b4c"
                  ></path>
                  <g id="Path-29_7">
                    <path
                      d="M230.429 328h-18.858c-.342 0-.571-.8-.571-2s.229-2 .571-2h18.858c.342 0 .571.8.571 2s-.229 2-.571 2z"
                      fill="#06d6a0"
                    ></path>
                    <path
                      d="M230.429 328h-18.858c-.342 0-.571-.8-.571-2s.229-2 .571-2h18.858c.342 0 .571.8.571 2s-.229 2-.571 2z"
                      fill="#06d6a0"
                    ></path>
                    <path
                      d="M230.429 328h-18.858c-.342 0-.571-.8-.571-2s.229-2 .571-2h18.858c.342 0 .571.8.571 2s-.229 2-.571 2z"
                      fill="#06d6a0"
                    ></path>
                  </g>
                  <g id="Path-29_8">
                    <path
                      d="M219 335.429v-18.858c0-.342.8-.571 2-.571s2 .229 2 .571v18.858c0 .342-.8.571-2 .571s-2-.229-2-.571z"
                      fill="#06d6a0"
                    ></path>
                    <path
                      d="M219 335.429v-18.858c0-.342.8-.571 2-.571s2 .229 2 .571v18.858c0 .342-.8.571-2 .571s-2-.229-2-.571z"
                      fill="#06d6a0"
                    ></path>
                    <path
                      d="M219 335.429v-18.858c0-.342.8-.571 2-.571s2 .229 2 .571v18.858c0 .342-.8.571-2 .571s-2-.229-2-.571z"
                      fill="#06d6a0"
                    ></path>
                  </g>
                </g>
                <path
                  id="Polygon 1"
                  d="M124.011 214.357c1.385.775 1.357 2.778-.048 3.515l-11.198 5.876c-1.342.704-2.95-.283-2.929-1.799l.166-12.057c.021-1.516 1.655-2.459 2.978-1.717l11.031 6.182z"
                  fill="#C4C4C4"
                ></path>
                <g id="forwardIcon">
                  <path
                    id="Polygon 2"
                    d="M221.011 213.357c1.385.775 1.357 2.778-.048 3.515l-11.198 5.876c-1.342.704-2.95-.283-2.929-1.799l.166-12.057c.021-1.516 1.655-2.459 2.978-1.717l11.031 6.182z"
                    fill="#C4C4C4"
                  ></path>
                  <path
                    id="Polygon 3"
                    d="M230.011 213.357c1.385.775 1.357 2.778-.048 3.515l-11.198 5.876c-1.342.704-2.95-.283-2.929-1.799l.166-12.057c.021-1.516 1.655-2.459 2.978-1.717l11.031 6.182z"
                    fill="#C4C4C4"
                  ></path>
                </g>
                <g id="forwardIcon_2">
                  <path
                    id="Polygon 2_2"
                    d="M262.366 217.643c-1.385-.775-1.357-2.778.049-3.515l11.197-5.876c1.343-.704 2.95.283 2.929 1.799l-.166 12.057c-.021 1.516-1.655 2.459-2.977 1.717l-11.032-6.182z"
                    fill="#C4C4C4"
                  ></path>
                  <path
                    id="Polygon 3_2"
                    d="M253.366 217.643c-1.385-.775-1.357-2.778.049-3.515l11.197-5.876c1.343-.704 2.95.283 2.929 1.799l-.166 12.057c-.021 1.516-1.655 2.459-2.977 1.717l-11.032-6.182z"
                    fill="#C4C4C4"
                  ></path>
                </g>
                <rect
                  id="Rectangle 1"
                  x="159"
                  y="208"
                  width="15"
                  height="16"
                  rx="2"
                  fill="#C4C4C4"
                ></rect>
                <rect
                  id="Rectangle 2"
                  x="466"
                  y="30"
                  width="3"
                  height="108"
                  rx="1"
                  fill="#C4C4C4"
                ></rect>
              </g>
            </g>
          </svg>
        </Wrapper>
      </GridItem>
    </>
  );
}

export default Boombox;
