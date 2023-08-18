import Image from "next/image";
import Link from "next/link";
import { RiFolderMusicFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";

function PlayList() {
  const [file, setFile] = useState();
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    const imgFile = e.target.files[0];
    const imgURL = URL.createObjectURL(imgFile);
    setFile(imgURL);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div className="playList px-6 py-3">
      <div className="gap-6">
        <section className="section-playList flex items-end relative bg-[#535353]">
          <div className="form-group mx-5 mt-5">
            <label className="form-label" htmlFor="avatar"></label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              hidden
              onChange={handleChange}
            />
            <label htmlFor="avatar">
              {file ? (
                <Image
                  id="preview"
                  className="avatar-preview cursor-pointer"
                  src={file}
                  alt=""
                  width="0"
                  height="0"
                  sizes="10vw"
                />
              ) : (
                <div className="flex flex-col items-center bg-[#282828] p-[5.75em] rounded cursor-pointer">
                  <RiFolderMusicFill className="icon-preview" />
                  <span>Chọn ảnh</span>
                </div>
              )}
            </label>
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
        </section>
        <section>
          <div className="py-6 border-b-[1px] border-white">
            <Tippy
              trigger={"click"}
              appendTo={() => document.body}
              interactive={true}
              onClickOutside={hide}
              placement="top-start"
              render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                  <ul className="playList-more">
                    <li className="more-list border-b border-b-[#363636]">
                      Xoá khỏi hồ sơ
                    </li>
                    <li className="more-list">Sửa thông tin chi tiết</li>
                    <li className="more-list">Tạo danh sách phát dự phòng</li>
                    <li className="more-list">Xoá</li>
                    <li className="more-list border-b border-b-[#363636]">
                      Loại bỏ khỏi hồ sơ sở thích của bạn
                    </li>
                    <li className="share more-list flex justify-between border-b border-b-[#363636] relative">
                      Chia sẻ
                      <IoMdArrowDropright className="text-[22px]" />
                      <ul className="box share-more p-1 absolute left-[16.5rem] -right-80">
                        <li className="more-list">
                          Sao chép đường đến liên kết danh sách phát
                        </li>
                        <li className="more-list">Nhúng danh sách phát</li>
                      </ul>
                    </li>
                    <li className="more-list border-b border-b-[#363636]">
                      Giới thiệu về nội dung đề xuất
                    </li>
                    <li className="more-list border-b border-b-[#363636]">
                      Mở trong ứng dụng dành cho máy tính
                    </li>
                  </ul>
                </div>
              )}
            >
              <div className="w-fit">
                <FiMoreHorizontal className="text-[28px] text-[#bababa] cursor-pointer" />
              </div>
            </Tippy>
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
              <IoCloseOutline className="text-[#bababa] text-[30px] cursor-pointer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PlayList;
