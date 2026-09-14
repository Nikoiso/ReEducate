import { useState } from "react";
import { IMaskInput } from "react-imask";

interface TextInputInfo {
  CardData: {
    name?: string;
    cardnumber?: string;
    month?: string;
    year?: string;
    cvc?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNumChange: (value: string) => void;
  onConfirm: () => void;
}

export default function TextInput({
  CardData,
  onChange,
  onNumChange,
  onConfirm,
}: TextInputInfo) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!CardData.name?.trim()) {
      newErrors.name = "Can't be blank";
    }

    if (!CardData.cardnumber?.trim()) {
      newErrors.cardnumber = "Can't be blank";
    } else if (CardData.cardnumber.replace(/\s/g, "").length < 16) {
      newErrors.cardnumber = "Wrong format, numbers only";
    }

    if (!CardData.month?.trim()) {
      newErrors.month = "Can't be blank";
    }

    if (!CardData.year?.trim()) {
      newErrors.year = "Can't be blank";
    }

    if (!CardData.cvc?.trim()) {
      newErrors.cvc = "Can't be blank";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onConfirm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[380px]">
      <div className="flex flex-col gap-5 text-[#21092F] font-mono">
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#21092F]">
            CARDHOLDER NAME
          </label>
          <input
            name="name"
            placeholder="e.g. Jane Appleseed"
            type="text"
            value={CardData.name || ""}
            onChange={onChange}
            className={`border rounded-[8px] text-[18px] p-3 w-full outline-none transition-colors placeholder:text-[#8F8694]/50 ${
              errors.name ? "border-[#FF5050]" : "border-[#DFDEE0] focus:border-[#6105E4]"
            }`}
          />
          {errors.name && (
            <span className="text-[12px] text-[#FF5050]">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#21092F]">
            CARD NUMBER
          </label>
          <IMaskInput
            mask="0000 0000 0000 0000"
            placeholder="e.g. 1234 5678 9123 0000"
            value={CardData.cardnumber || ""}
            onAccept={(value: string) => onNumChange(value)}
            className={`border rounded-[8px] text-[18px] p-3 w-full outline-none transition-colors placeholder:text-[#8F8694]/50 ${
              errors.cardnumber ? "border-[#FF5050]" : "border-[#DFDEE0] focus:border-[#6105E4]"
            }`}
          />
          {errors.cardnumber && (
            <span className="text-[12px] text-[#FF5050]">{errors.cardnumber}</span>
          )}
        </div>

        <div className="flex gap-3 w-full">
          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#21092F]">
              EXP. DATE (MM/YY)
            </label>
            <div className="flex gap-2">
              <input
                name="month"
                placeholder="MM"
                maxLength={2}
                type="text"
                value={CardData.month || ""}
                onChange={onChange}
                className={`border rounded-[8px] text-[18px] p-3 w-1/2 text-center outline-none transition-colors placeholder:text-[#8F8694]/50 ${
                  errors.month ? "border-[#FF5050]" : "border-[#DFDEE0] focus:border-[#6105E4]"
                }`}
              />
              <input
                name="year"
                placeholder="YY"
                maxLength={2}
                type="text"
                value={CardData.year || ""}
                onChange={onChange}
                className={`border rounded-[8px] text-[18px] p-3 w-1/2 text-center outline-none transition-colors placeholder:text-[#8F8694]/50 ${
                  errors.year ? "border-[#FF5050]" : "border-[#DFDEE0] focus:border-[#6105E4]"
                }`}
              />
            </div>
            {(errors.month || errors.year) && (
              <span className="text-[12px] text-[#FF5050]">
                {errors.month || errors.year}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#21092F]">
              CVC
            </label>
            <input
              name="cvc"
              placeholder="e.g. 123"
              maxLength={3}
              type="text"
              value={CardData.cvc || ""}
              onChange={onChange}
              className={`border rounded-[8px] text-[18px] p-3 w-full outline-none transition-colors placeholder:text-[#8F8694]/50 ${
                errors.cvc ? "border-[#FF5050]" : "border-[#DFDEE0] focus:border-[#6105E4]"
              }`}
            />
            {errors.cvc && (
              <span className="text-[12px] text-[#FF5050]">{errors.cvc}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#21092F] text-white rounded-[8px] p-4 mt-2 font-medium text-[18px] cursor-pointer hover:bg-[#38134d] transition-colors"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}