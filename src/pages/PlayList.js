import Image from "next/image";
import Link from "next/link";
import { RiFolderMusicFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { BiSearch, BiSolidPencil } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";

function PlayList() {
  // const [file, setFile] = useState();

  const handleChange = (preview) => {
    preview.src = window.URL.createObjectURL(this.files[0]);
  };

  return (
    <div className="playList px-6 py-3">
      <div className="gap-6">
        <section className="section-playList flex items-end relative bg-[#535353]">
          <div className="img-playlist w-[232px] h-[232px] mx-6 bg-[#282828] rounded my-4 relative">
            <RiFolderMusicFill className="add-avatar text-[30px] text-center w-1/2 h-full m-[0_auto]" />
            <div className="form-group absolute top-[35%] left-[39%] text-center cursor-pointer">
              <label
                className="form-label cursor-pointer"
                htmlFor="avatar"
              ></label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                hidden
                // onChange={handleChange}
                onchange="preview.src=window.URL.createObjectURL(this.files[0])"
              />
              <label htmlFor="avatar">
                <Image
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="avatar-preview max-w-[75px] max-h-[75px] cursor-pointer "
                  id="preview"
                  priority
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[14px]">Playlist</span>
            <h1 className="font-black text-[60px] cursor-pointer">
              Danh sách phát của tôi #1
            </h1>
            <span className="font-bold text-[14px] cursor-pointer hover:underline">
              Viet Nguyen
            </span>
          </div>
          {/* <div className="block bg-[#535353] h-full w-full left-0 right-0 absolute"></div>
          <div className="header"></div> */}
        </section>
        <section>
          <div className="py-6 border-b-[1px] border-white">
            <FiMoreHorizontal className="text-[28px] text-[#bababa] cursor-pointer" />
          </div>
          <div className="flex justify-between items-center mt-6 py-6">
            <div>
              <h2 className="text-[24px] font-bold mb-4">
                Hãy cùng tìm nội dung cho danh sách phát của bạn
              </h2>
              <div className="search relative">
                <BiSearch className="search-icon absolute" />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Tìm bài hát và tập podcast"
                  className=""
                />
              </div>
            </div>
            <div>
              <GrClose className="text-[#bababa] text-[24px] cursor-pointer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PlayList;
