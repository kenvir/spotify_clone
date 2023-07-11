import Image from "next/image";
import Link from "next/link";

function Download() {
  return (
    <div className="download w-full z-[1]">
      <section className="flex flex-col items-center justify-center">
        <div className="imgs mt-[-200px] pt-[200px]">
          <div className="">
            <Image
              src="https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png"
              alt={"logo"}
              width="640"
              height="396"
              sizes="10vw"
              className="max-w-full max-h-full cursor-pointer rounded"
              priority
            />
          </div>
          <div className="max-w-[640px] flex flex-col items-center">
            <h2 className="text-[30px] font-bold text-center">
              Nghe nhạc bạn thích không gián đoạn. Tải xuống ứng dụng Spotify
              dành cho máy tính.
            </h2>
            <Link
              href="/"
              className="text-black text-[16px] bg-[#1ed760] font-bold px-6 py-3 mt-6 rounded-full"
            >
              Tải ứng dụng miễn phí của chúng tôi
            </Link>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;
