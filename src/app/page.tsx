import Benefits from "@/components/benefit/page";
import HeroSection from "@/components/hero/page";
import Shop from "../app/(public-routes)/shop/page";
import Collections from "@/components/collections/page";
import Deals from "@/components/deals/page"
export default function Home() {
  return (
    <div>
<HeroSection/>
<Shop/>
<Collections/> 
<Deals/>
<Benefits/>
    </div>
  );
}
