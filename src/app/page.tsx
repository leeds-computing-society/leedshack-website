import Image from "next/image";
export default function Page() {
  return (
    <div className="flex flex-row justify-center items-center grow text-white">
      <div className="flex flex-col text-center mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem]">
        <Image
          className="max-w-[24rem] w-full mx-auto"
          alt="LeedsHack 2027 Logo"
          src="/leeds-hack/2027-logo.png"
          width={1511}
          height={925}
        />
        <h1 className="text-header-lg font-bold">COMING SOON!!</h1>
        <h6 className="text-header-md font-bold mt-6">Stay tuned.</h6>
      </div>
    </div>
  );
}
