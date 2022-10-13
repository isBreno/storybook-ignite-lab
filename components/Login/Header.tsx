import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center flex-col text-center gap-2">
      <div className=" w-20 h-24 relative">
        <Image
          src="/react.svg"
          layout="fill"
          alt="React Logo"
          quality={100}
          priority
        />
      </div>

      <h1 className="font-bold text-2xl">Ignite Lab</h1>
      <span className="text-lg text-gray-900">Faça login e comece a usar!</span>
    </div>
  );
};

export default Header;
