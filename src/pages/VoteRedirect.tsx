import { useEffect } from "react";

const VoteRedirect = () => {
  useEffect(() => {
    window.location.href = "https://vote.nocostyle.com/health-and-wellness/chiropractor";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="text-center">
        <p className="text-white text-lg">Redirecting to the voting page...</p>
      </div>
    </div>
  );
};

export default VoteRedirect;
