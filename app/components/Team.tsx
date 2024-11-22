import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import img1 from "../../public/images/team1.png";
import img2 from "../../public/images/team2.png";
import img3 from "../../public/images/team3.png";
import img4 from "../../public/images/team4.png";
import img5 from "../../public/images/team5.png";
import img6 from "../../public/images/team6.png";
import linkedin from "../../public/images/social1.svg";
import twitter from "../../public/images/social2.svg";
import website from "../../public/images/social3.svg";

function Team() {
  const teamMembers = [
    {
      name: "James Nduku",
      role: "Marketing Coordinator",
      image: img1,
    },
    {
      name: "Sarah Lee",
      role: "UI/UX Designer",
      image: img2,
    },
    {
      name: "Michael Brown",
      role: "Software Engineer",
      image: img3,
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      image: img4,
    },
    {
      name: "Daniel Kim",
      role: "Data Scientist",
      image: img5,
    },
    {
      name: "Sophia White",
      role: "Content Writer",
      image: img6,
    },
  ];

  return (
    <div>
      <div className="text-center flex flex-col justify-center m-auto py-20 px-4">
        <h1 className="sm:text-3xl text-2xl font-semibold">Our Teams</h1>
        <p className="sm:text-[0.9em] text-[0.75em]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="m-auto gap-24 grid lg:grid-cols-3 sm:grid-cols-2 py-20 px-2 grid-cols-1">
          {teamMembers.map((member, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <div className="flex py-4 px-4 flex-col gap-5 w-[100%] justify-center text-center">
                  <Image
                    src={member.image}
                    className="m-auto rounded-full"
                    alt={member.role}
                  />
                  <div className="content">
                    <h2 className="text-xl font-semibold">{member.name}</h2>
                    <span className="sm:text-[0.9em] text-[0.8em]">
                      {member.role}
                    </span>
                  </div>
                  <div className="flex m-auto gap-5">
                    <Image src={linkedin} width={25} alt="linkedin" />
                    <Image src={twitter} width={25} alt="twitter" />
                    <Image src={website} width={25} alt="website" />
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-center">
                  <b>{member.name}</b> is a <b>{member.role}</b>. Connect with
                  them on LinkedIn, Twitter, or visit their website!
                </p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
