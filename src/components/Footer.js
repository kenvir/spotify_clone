import { RxLoop } from "react-icons/rx";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { BiSolidPlaylist } from "react-icons/bi";
import { BsFilePlay, BsPcDisplay } from "react-icons/bs";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import { FaMix } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer h-auto">
      <div className="w-full h-[72px] flex items-center">
        <section className="w-[30%]"></section>
        <section className="footer-section flex w-2/5">
          <div className="flex flex-col w-full ">
            <div className="flex items-center text-[#4d4d4d] gap-5 my-2">
              <div className="flex flex-1 justify-end gap-4 text-[22px]">
                <FaMix className="cursor-pointer" />
                <IoPlaySkipForwardSharp className="cursor-pointer" />
              </div>
              <button className="text-[32px]">
                <FaCirclePause className="cursor-pointer" />
                {/* <FaCirclePlay className="cursor-pointer" /> */}
              </button>
              <div className="flex flex-1 gap-4 text-[22px]">
                <IoPlaySkipBackSharp className="cursor-pointer" />
                <RxLoop className="cursor-pointer" />
              </div>
            </div>
            <div className="playback-bar">
              <div className="time text-right">-:--</div>
              <div className="w-full h-3 relative">
                <label className="hidden-visually">
                  <input
                    disabled=""
                    type="range"
                    min="0"
                    max="0"
                    step="0"
                    aria-valuetext="-:--/-:--"
                    defaultValue="0"
                    className="text-[#b3b3b3]"
                  />
                </label>
                <div
                  className="progress-bar"
                  style={{ "--progress-bar-transform": "0" }}
                >
                  <div
                    className="progress-bar--time w-full h-1 rounded-full"
                    data-testid="progress-bar-background"
                  >
                    <div className="overflow-hidden">
                      <div></div>
                    </div>
                    <div className="ml-[-6px] absolute z-[1]"></div>
                  </div>
                </div>
              </div>
              <div className="time text-left">-:--</div>
            </div>
          </div>
        </section>
        <section className="w-[30%]">
          <div className="flex items-center justify-end gap-2 text-[#4d4d4d]">
            <button className="cursor-not-allowed text-[18px]">
              <BsFilePlay />
            </button>
            <div className="text-white text-[22px] cursor-pointer">
              <BiSolidPlaylist />
            </div>
            <div className="text-white text-[20px] cursor-pointer">
              <BsPcDisplay />
            </div>
            <div className="flex items-center">
              <div className="hidden text-white text-[26px] cursor-pointer">
                <GiSoundOff />
              </div>
              <div className="text-white text-[26px] mr-3 cursor-pointer">
                <GiSoundOn />
              </div>
              {/* <div className="volume">
                <div className="relative h-3 w-full">
                  <label className="hidden-visually">
                    Thay đổi âm lượng
                    <input type="range" min="0" max="1" step="0.1" value="1" />
                  </label>
                  <div
                    className="progress-bar"
                    style={{ "--progress-bar-transform": "0" }}
                  >
                    <div
                      className="progress-bar--time w-full h-1 rounded-full"
                      data-testid="progress-bar-background"
                    >
                      <div className="overflow-hidden">
                        <div className=""></div>
                      </div>
                      <div className="ml-[-6px] left-full absolute z-[100]"></div>
                    </div>
                    <div style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div> */}
              <div className="volume-bar">
                <div className="w-full h-3 relative">
                  <label className="hidden-visually">
                    <input
                      disabled=""
                      type="range"
                      min="0"
                      max="0"
                      step="0"
                      defaultValue="0"
                      className="text-white"
                    />
                  </label>
                  <div
                    className="progress-bar"
                    style={{ "--progress-bar-transform": "100%" }}
                    data-testid="progress-bar"
                  >
                    <div
                      className="progress-bar--time w-full h-1 rounded-full"
                      data-testid="progress-bar-background"
                    >
                      <div className="overflow-hidden">
                        <div></div>
                      </div>
                      <div className="ml-[-6px] left-full absolute z-[1]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
