interface OrderSummaryProps {
  open: boolean;
  close: () => void;
}

export default function OrderSummary({
  open,
  close,
}: OrderSummaryProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-[540px] rounded-[10px] bg-[#FEFCF7] p-8 md:p-12">
        <h2 className="text-[32px] font-black text-[#333D4B]">
          Order Summary
        </h2>

        <p className="mt-6 text-[15px] leading-[25px] text-[#333D4B]">
          Your personalized coffee subscription has been created.
        </p>

        <button
          onClick={close}
          className="mt-8 rounded-[6px] bg-[#0E8784] px-8 py-4 text-[12px] font-bold text-white hover:bg-[#66D2CF]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
