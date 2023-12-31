import Link from "next/link";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiUser } from "react-icons/bi";

function Header() {
  return (
    <header className="header w-full">
      <div className="flex justify-between">
        <section className="flex items-center">
          <IoIosArrowBack className="button" />
          <IoIosArrowForward className="button ml-3" />
        </section>
        <section className="flex items-center z-10">
          <Link
            href="https://www.spotify.com/vn-vi/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=web_loggedin_upgrade_button"
            target="_blank"
            className="bg-white text-black text-[14px] font-bold rounded-full py-2 px-3 mr-4 max-w-max"
          >
            Khám phá Premium
          </Link>
          <Link
            href="/Download"
            className="bg-[#0f0f0f] text-white text-[14px] font-bold rounded-full py-2 px-3 mr-4 max-w-max"
          >
            Cài đặt ứng dụng
          </Link>
          <Link href="/">
            <BiUser className="bg-black text-[32px] rounded-[50%] p-2" />
          </Link>
        </section>
      </div>
    </header>
  );
}

export default Header;
