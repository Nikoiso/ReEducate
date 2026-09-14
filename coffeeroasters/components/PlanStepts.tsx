export default function PlanSteps() {
    const steps = [
      { num: '01', title: 'Pick your coffee', desc: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and roasted to perfection.' },
      { num: '02', title: 'Choose the frequency', desc: 'Customize your order frequency, quantity, and grind type. We’ll ship your fresh coffee right on schedule.' },
      { num: '03', title: 'Receive and enjoy!', desc: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees.' },
    ];
  
    return (
      <div className="bg-[#2C3440] rounded-xl text-white p-12 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, idx) => (
          <div key={idx}>
            <span className="text-[#DD6B20] text-7xl font-bold font-serif">{step.num}</span>
            <h3 className="text-2xl font-bold mt-6 mb-4">{step.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    );
  }