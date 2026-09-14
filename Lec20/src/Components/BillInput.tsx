interface BillInputProps {
  bill: number;
  setBill: (value: number) => void;
}

export default function BillInput({ bill, setBill }: BillInputProps) {
  return (
    <div className="input-group">
      <label className="input-label">Bill</label>
      <div className="input-wrapper">
        <span className="input-icon">$</span>
        <input
          type="number"
          placeholder="0"
          value={bill === 0 ? "" : bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="calculator-input"
        />
      </div>
    </div>
  );
}