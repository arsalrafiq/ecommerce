import React, { ReactElement } from 'react';
import { HiOutlineTruck, HiOutlineRefresh, HiOutlineChatAlt2, HiOutlineCreditCard } from 'react-icons/hi';

interface BenefitCardProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
}

interface BenefitsProps {}

const Benefits: React.FC<BenefitsProps> = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-8 lg:px-10">
      <h2 className="text-center text-xl font-bold mb-8">Our Benefits</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <BenefitCard icon={HiOutlineTruck} title="Free Shipping" description="Free shipping for orders above $150" />
        <BenefitCard icon={HiOutlineRefresh} title="Money Guarantee" description="Free Within 30 days for an exchange" />
        <BenefitCard icon={HiOutlineChatAlt2} title="Online Support" description="Free delivery 24 hours a day, 7 days a week" />
        <BenefitCard icon={HiOutlineCreditCard} title="Flexible Payment" description="Pay with multiple credit cards,Easy paisa" />
      </div>
    </div>
  );
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => {
  return (
<div className=" flex flex-col justify-center p-24 rounded-lg text-left bg-white">
  <Icon className="text-4xl mb-4 md:mb-0" />
  <div className="md:text-left">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-800">{description}</p>
  </div>
</div>


  );
};

export default Benefits;
