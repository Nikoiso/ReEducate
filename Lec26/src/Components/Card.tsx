interface TextInputInfo {
    CardData: {
      name?: string;
      cardnumber?: string;
      month?: string;
      year?: string;
      cvc?: string;
    };
  }
  
  export default function Card({ CardData }: TextInputInfo) {
    return (
      <div className="relative w-[343px] h-[240px] md:w-[540px] md:h-[400px] flex justify-center items-center">
        <div className="absolute top-0 right-0 md:bottom-0 md:right-0 md:top-auto w-[286px] h-[157px] md:w-[447px] md:h-[245px] rounded-[10px] bg-[#D2D5DA] text-white flex flex-col justify-between py-4 md:py-6 overflow-hidden shadow-2xl z-0">
          <div className="w-full h-9 md:h-12 bg-[#2F2F2F] mt-1 md:mt-2"></div>
          <div className="px-7 md:px-10">
            <div className="w-full h-8 md:h-10 bg-[#ADB5BD] rounded-[4px] flex items-center justify-end px-3 md:px-4 text-[10px] md:text-sm tracking-[0.18em] font-mono text-white font-medium">
              {CardData?.cvc || "000"}
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-30">
            <div className="w-28 md:w-48 h-1 bg-[#6C757D] rounded-full"></div>
            <div className="w-20 md:w-36 h-1 bg-[#6C757D] rounded-full"></div>
            <div className="w-24 md:w-40 h-1 bg-[#6C757D] rounded-full"></div>
          </div>
        </div>
  
        <div className="absolute bottom-0 left-0 md:top-0 md:left-0 w-[286px] h-[157px] md:w-[447px] md:h-[245px] rounded-[10px] p-5 md:p-8 text-white flex flex-col justify-between overflow-hidden shadow-2xl bg-gradient-to-tr from-[#6348FE] via-[#6105E4] to-[#FF6080] z-10">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-7 h-7 md:w-12 md:h-12 bg-white rounded-full"></div>
            <div className="w-3 h-3 md:w-5 md:h-5 border border-white/80 rounded-full"></div>
          </div>
  
          <div className="text-[17px] md:text-[25px] tracking-[0.16em] md:tracking-[0.18em] font-medium font-mono whitespace-nowrap">
            {CardData?.cardnumber || "0000 0000 0000 0000"}
          </div>
  
          <div className="flex justify-between items-center text-[9px] md:text-[12px] tracking-[0.18em] uppercase text-white/90 font-mono">
            <span className="truncate max-w-[150px] md:max-w-[240px]">
              {CardData?.name || "JANE APPLESEED"}
            </span>
            <span>
              {CardData?.month || "00"}/{CardData?.year || "00"}
            </span>
          </div>
        </div>
      </div>
    );
  }