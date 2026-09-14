'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import PlanSteps from '@/components/PlanStepts';
import OptionCard from '@/components/OptionCard';
import OrderModal from '@/components/OrderModal';

export default function PlanPage() {
  const [plan, setPlan] = useState({
    preference: '',
    type: '',
    quantity: '',
    grind: '',
    frequency: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isCapsule = plan.preference === 'Capsule';

  const options = {
    preference: [
      { id: 'Capsule', title: 'Capsule', desc: 'Compatible with Nespresso systems and similar brewers' },
      { id: 'Filter', title: 'Filter', desc: 'For pour over or drip methods like Aeropress, Chemex, and V60' },
      { id: 'Espresso', title: 'Espresso', desc: 'Dense and finely ground beans for an intense, flavorful experience' },
    ],
    type: [
      { id: 'Single Origin', title: 'Single Origin', desc: 'Distinct, high quality coffee from a specific family-owned farm' },
      { id: 'Decaf', title: 'Decaf', desc: 'Just like regular coffee, except the caffeine has been removed' },
      { id: 'Blended', title: 'Blended', desc: 'Combination of two or three dark roasted beans of organic coffees' },
    ],
    quantity: [
      { id: '250g', title: '250g', desc: 'Perfect for the solo drinker. Yields about 12 cups.', price: '7.20' },
      { id: '500g', title: '500g', desc: 'Best option for a couple. Yields about 25 cups.', price: '13.00' },
      { id: '1000g', title: '1000g', desc: 'Perfect for offices and events. Yields about 50 cups.', price: '22.00' },
    ],
    grind: [
      { id: 'Wholebean', title: 'Wholebean', desc: 'Best choice if you cherish the origination process' },
      { id: 'Filter', title: 'Filter', desc: 'For drip or pour-over coffee methods in home' },
      { id: 'Cafetiere', title: 'Cafetiere', desc: 'Course ground beans specially suited for french press' },
    ],
    frequency: [
      { id: 'Every week', title: 'Every week', desc: '$7.20 per shipment. Includes free first-class shipping.' },
      { id: 'Every 2 weeks', title: 'Every 2 weeks', desc: '$9.60 per shipment. Includes free priority shipping.' },
      { id: 'Every month', title: 'Every month', desc: '$12.00 per shipment. Includes free priority shipping.' },
    ],
  };

  const calculatePrice = () => {
    const base: Record<string, number> = { '250g': 7.20, '500g': 13.00, '1000g': 22.00 };
    const mult: Record<string, number> = { 'Every week': 4, 'Every 2 weeks': 2, 'Every month': 1 };
    if (!plan.quantity || !plan.frequency) return '0.00';
    return (base[plan.quantity] * mult[plan.frequency]).toFixed(2);
  };

  const isComplete = plan.preference && plan.type && plan.quantity && (isCapsule || plan.grind) && plan.frequency;

  const summaryText = `I drink my coffee as ${plan.preference || '_____'}, with a ${plan.type || '_____'} type of bean. ${plan.quantity || '_____'} ground ala ${isCapsule ? 'N/A' : (plan.grind || '_____')}, sent to me ${plan.frequency || '_____'}.`;

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-28 pt-6 pb-32">
      <Hero 
        title="Create plan" 
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the world delivered fresh to your door."
        showButton={false}
      />

      <div className="space-y-28">
        <PlanSteps />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="hidden lg:block space-y-6">
            {[
              { id: 'preference', label: '01 Preference' },
              { id: 'type', label: '02 Type' },
              { id: 'quantity', label: '03 Quantity' },
              { id: 'grind', label: '04 Grind type' },
              { id: 'frequency', label: '05 Contact' },
            ].map((step, idx) => (
              <div key={step.id} className={`text-xl font-bold pb-4 border-b border-gray-300 ${idx === 0 ? 'text-[#333D4B]' : 'text-[#83888F]'}`}>
                {step.label}
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 space-y-20">
            <section>
              <h2 className="text-3xl font-bold text-[#83888F] mb-10 font-serif">How do you drink your coffee?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {options.preference.map(opt => (
                  <OptionCard
                    key={opt.id}
                    title={opt.title}
                    description={opt.desc}
                    isSelected={plan.preference === opt.id}
                    onClick={() => setPlan({ ...plan, preference: opt.id, grind: opt.id === 'Capsule' ? '' : plan.grind })}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#83888F] mb-10 font-serif">What type of coffee?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {options.type.map(opt => (
                  <OptionCard
                    key={opt.id}
                    title={opt.title}
                    description={opt.desc}
                    isSelected={plan.type === opt.id}
                    onClick={() => setPlan({ ...plan, type: opt.id })}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#83888F] mb-10 font-serif">How much would you like?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {options.quantity.map(opt => (
                  <OptionCard
                    key={opt.id}
                    title={opt.title}
                    description={opt.desc}
                    price={opt.price}
                    isSelected={plan.quantity === opt.id}
                    onClick={() => setPlan({ ...plan, quantity: opt.id })}
                  />
                ))}
              </div>
            </section>

            <section className={`${isCapsule ? 'opacity-40 pointer-events-none' : ''}`}>
              <h2 className="text-3xl font-bold text-[#83888F] mb-10 font-serif">Want us to grind them?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {options.grind.map(opt => (
                  <OptionCard
                    key={opt.id}
                    title={opt.title}
                    description={opt.desc}
                    isSelected={plan.grind === opt.id}
                    onClick={() => setPlan({ ...plan, grind: opt.id })}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#83888F] mb-10 font-serif">How often should we deliver?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {options.frequency.map(opt => (
                  <OptionCard
                    key={opt.id}
                    title={opt.title}
                    description={opt.desc}
                    isSelected={plan.frequency === opt.id}
                    onClick={() => setPlan({ ...plan, frequency: opt.id })}
                  />
                ))}
              </div>
            </section>

            <div className="bg-[#2C3440] rounded-xl p-12 text-white">
              <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Order Summary</span>
              <p className="text-2xl font-serif mt-3 leading-relaxed">
                "{summaryText}"
              </p>
            </div>

            <div className="flex justify-end">
              <button
                disabled={!isComplete}
                onClick={() => setIsModalOpen(true)}
                className={`px-8 py-4 rounded-lg font-bold text-white transition-all ${
                  isComplete ? 'bg-[#0E8784] hover:bg-[#66D2D6]' : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Create my plan!
              </button>
            </div>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        summaryText={summaryText}
        totalPrice={calculatePrice()}
        onCheckout={() => alert('Order Placed Successfully!')}
      />
    </div>
  );
}