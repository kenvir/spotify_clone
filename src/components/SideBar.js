import { GoHomeFill, GoSearch } from "react-icons/go";
import { BiLibrary } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

function SideBar() {
  return (
    <sidebar className="sidebar w-[355px] h-full">
      <section className="bg-[#121212] rounded-lg py-2 px-3 mb-2 h-[18%]">
        <div className="flex items-center py-1 px-3 h-10 gap-5 mb-3 cursor-pointer">
          <Link href="/" className="flex text-[18px] font-semibold">
            <GoHomeFill className="text-[22px] font-semibold mr-5" />
            Trang chủ
          </Link>
        </div>
        <div className="flex items-center py-1 px-3 h-10 gap-5 mt-3 cursor-pointer">
          <GoSearch className="text-[22px] font-semibold" />
          <span className="text-[#a3a3a3] text-[18px] font-semibold hover:text-white">
            Tìm kiếm
          </span>
        </div>
      </section>
      <section className="bg-[#121212] rounded-lg py-2 px-3 sidebar-2">
        <div className="flex items-center justify-between py-2 px-4 mb-4 text-[#a3a3a3] font-bold gap-3">
          <div className="flex items-center hover:text-white cursor-pointer">
            <BiLibrary className="text-[22px] mr-3" />
            <span className="text-[18px]">Thư viện</span>
          </div>
          <div className="flex items-center">
            <IoAdd className="add mr-2" />
            <AiOutlineArrowRight className="add" />
          </div>
        </div>
        <div className="flex flex-col bg-[#242424] rounded-lg py-4 px-5 mb-6 gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Tạo danh sách phát đầu tiên của bạn</h3>
            <p className="font-semibold text-[14px]">
              Rất dễ! Chúng tôi sẽ giúp bạn
            </p>
          </div>
          <Link
            href="/PlayList"
            className="bg-white text-black text-[14px] font-bold rounded-full py-1 px-3 max-w-max"
          >
            Tạo danh sách phát
          </Link>
        </div>

        <div className="flex flex-col bg-[#242424] rounded-lg py-4 px-5 mb-6 gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">
              Hãy cùng tìm hiểu và theo dõi một số podcast
            </h3>
            <p className="font-semibold text-[14px]">
              Chúng tôi sẽ cập nhật thông tin cho bạn về các tập mới
            </p>
          </div>
          <Link
            href="/PodCast"
            className="bg-white text-black text-[14px] font-bold rounded-full py-1 px-3 max-w-max"
          >
            Duyệt xem podcast
          </Link>
        </div>
      </section>
    </sidebar>
  );
}

export default SideBar;
