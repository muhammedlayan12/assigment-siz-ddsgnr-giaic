import logo from "../../public/images/logo.png";
import Image from "next/image";
import facebookimg from "../../public/images/facebook.svg";
import githubimg from "../../public/images/github.svg";
import instagramimg from "../../public/images/instagram.svg";
import linkedinimg from "../../public/images/linkedin.svg";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-12 py-6 px-8 sm:px-16 mt-20">
        {/* Newsletter Section */}
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <h2 className="text-[1.2em] sm:text-[1.6em] font-semibold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-[0.8em] sm:text-[0.9em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <form className="flex flex-wrap gap-2 w-full md:w-auto">
            <input
              className="py-3 pl-2 w-full sm:w-auto sm:pr-10 bg-white border border-black"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              className="py-3 px-4 uppercase tracking-widest text-white bg-black border border-black hover:text-black hover:bg-transparent transition-all duration-500"
              type="submit"
              value="Submit"
            />
          </form>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* Logo */}
          <div className="w-full sm:w-auto">
            <Image src={logo} width={150} alt="Logo" />
          </div>

          {/* Column Links */}
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-semibold">Courses</h3>
            <span className="text-gray-500">Business</span>
            <span className="text-gray-500">Development</span>
            <span className="text-gray-500">Technology</span>
            <span className="text-gray-500">Design</span>
            <span className="text-gray-500">Programming</span>
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-semibold">Resources</h3>
            <span className="text-gray-500">Career</span>
            <span className="text-gray-500">Resume</span>
            <span className="text-gray-500">Learning</span>
            <span className="text-gray-500">Guide</span>
            <span className="text-gray-500">Jobs</span>
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-semibold">About Us</h3>
            <span className="text-gray-500">Contact</span>
            <span className="text-gray-500">Help/Support</span>
            <span className="text-gray-500">FAQ</span>
            <span className="text-gray-500">Terms & Conditions</span>
            <span className="text-gray-500">Partners</span>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center gap-5">
          {/* Footer Links */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>2023 Ddsgnr. All Rights Reserved</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5">
            <Image
              className="w-[25px] sm:w-[35px]"
              src={facebookimg}
              alt="Facebook"
            />
            <Image
              className="w-[25px] sm:w-[35px]"
              src={githubimg}
              alt="GitHub"
            />
            <Image
              className="w-[25px] sm:w-[35px]"
              src={instagramimg}
              alt="Instagram"
            />
            <Image
              className="w-[25px] sm:w-[35px]"
              src={linkedinimg}
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
