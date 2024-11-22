import facebookimg from "../../public/images/facebook.svg";
import githubimg from "../../public/images/github.svg";
import instagramimg from "../../public/images/instagram.svg";
import linkedinimg from "../../public/images/linkedin.svg";

import Image from "next/image";
function Header() {
  return (
  <div>
    <div className="hidden md:flex justify-around py-2 px-4 shadow-sm items-center">
        <div className="flex gap-9">
            <p className="tracking-wider text-[0.85em] font-[400] font-poppins">Phone Number :<span className="text-[#838383] text-[0.75em]"> 03128854302</span></p>
            <p className="tracking-wider text-[0.85em] font-[400] font-poppins">Email :<span className="text-[#838383] text-[0.75em]"> muhammedlayan12@gmail.com</span></p>
        </div>
        <div className="flex gap-7">
            <Image className="lg:w-[35px] w-[30px]" src={facebookimg} alt="Social facebook icon"/>
            <Image className="lg:w-[35px] w-[30px]" src={githubimg} alt="Social instagram icon"/>
            <Image className="lg:w-[35px] w-[30px]" src={instagramimg} alt="Social github icon"/>
            <Image className="lg:w-[35px] w-[30px]" src={linkedinimg} alt="Social linkedin icon"/>
        </div>
    </div>
    </div>
  );
}

export default Header;