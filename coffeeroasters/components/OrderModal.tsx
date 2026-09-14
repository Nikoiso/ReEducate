interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    summaryText: string;
    totalPrice: string;
    onCheckout: () => void;
  }
  
  export default function OrderModal({ isOpen, onClose, summaryText, totalPrice, onCheckout }: OrderModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
          <div className="bg-[#2C3440] p-8 text-white">
            <h3 className="text-3xl font-bold">Order Summary</h3>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-xl text-gray-500 font-serif leading-relaxed">"{summaryText}"</p>
            <p className="text-sm text-[#83888F]">Is this correct? You can proceed to checkout or go back to edit your plan.</p>
            <div className="flex items-center justify-between pt-4">
              <span className="text-3xl font-bold text-[#2C3440]">${totalPrice} / mo</span>
              <button onClick={onCheckout} className="bg-[#0E8784] hover:bg-[#66D2D6] text-white px-8 py-4 rounded-lg font-bold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }