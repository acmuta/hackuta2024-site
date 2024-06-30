import { WarningTriangle } from "iconoir-react";

const UnderConstruction = () => {
  return (
    <>
      <div className="flex items-center bg-black/95 justify-center text-white/60 gap-2 p-1 ">
        <WarningTriangle className=" size-5" color="#818cf8" />
        <h1 className="text-sm">Site Under-Construction</h1>
        <MHL_Logo />
      </div>
    </>
  );
};

export default UnderConstruction;

const MHL_Logo = () => {
  return (
    <>
      <a
        id="mlh-trust-badge"
        className="max-w-24 min-w-16 fixed right-12 top-0 w-[10%] z-[100000]"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          className="w-full"
        />
      </a>
    </>
  );
};
