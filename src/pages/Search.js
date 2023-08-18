import Link from "next/link";
import Image from "next/image";
import searchList from "../API/SearchList.json";

function Search() {
  return (
    <main className="search w-full">
      <div className="">
        <input
          type="search"
          className="bg-[#2a2a2a] h-12 py-[6px] px-9 rounded-full"
          placeholder="Bạn muốn nghe gì?"
        />
      </div>
      <div className="flex flex-col justify-between gap-6 px-6 py-3 h-full overflow-y-scroll">
        <section>
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="text-[22px] text-white font-bold cursor-pointer hover:underline"
            >
              Duyệt tìm tất cả
            </Link>
          </div>
          <div className="list">
            {searchList.map((d, i) => (
              <div key={i}>
                <Link
                  href="/"
                  className="bg-[#181818]  rounded-lg hover:bg-[#282828]"
                >
                  <div className="mb-4 h-52 bg-[#e13300] rounded-lg">
                    <p className="text-[16px] p-4 text-white font-bold pb-1 line-clamp-1">
                      {d.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* <div className="list">
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Podcasts
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Sự kiện trực tiếp
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Dành cho bạn
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Mới phát hành
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Nhạc Việt
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Pop
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  K-Pop
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Hịp Hop
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Bảng xếp hạng
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  Fresh Finds
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  EQUAL
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  GLOW
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828]"
            >
              <div className="mb-4">
                <Image
                  src="	https://i.scdn.co/image/ab67656300005f1ff0ac6fb61b796aed7347f27d"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="10vw"
                  className="w-full h-auto cursor-pointer rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] text-white font-bold pb-1 line-clamp-1">
                  RADAR
                </p>
              </div>
            </Link>
          </div> */}
        </section>
      </div>
    </main>
  );
}

export default Search;
