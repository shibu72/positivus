import ServiceCard from "@/components/ui/Card";
import TitleMain, { TitleSub } from "../ui/Title";

const services = [
  {
    title: "Search engine optimization",
    bgColor: "bg-white",
    textColor: "text-black",
    textHighlightColor: "bg-green",
    image: "/images/Illustration.png",
    href: "/services/seo",
  },
  {
    title: "Pay-per-click advertising",
    textHighlightColor: "bg-white",
    bgColor: "bg-lime-400",
    image: "/images/Illustration1.png",
    href: "/services/ppc",
  },
  {
    title: "Social Media Marketing",
    bgColor: "bg-zinc-900",
    textColor: "text-white",
    image: "/images/Illustration2.png",
    href: "/services/social",
  },
  {
    title: "Email Marketing",
    bgColor: "bg-white",
    image: "/images/Illustration3.png",
    href: "/services/email",
  },
  {
    title: "Content Creation",
    bgColor: "bg-lime-400",
    image: "/images/Illustration4.png",
    href: "/services/content",
  },
  {
    title: "Analytics and Tracking",
    bgColor: "bg-zinc-900",
    textColor: "text-white",
    image: "/images/Illustration5.png",
    href: "/services/analytics",
  },
];

export default function Service() {
  return (
    <div className="m-auto mt-40">
      <div className="flex items-center gap-10 mb-20">
        <TitleMain className="">Services</TitleMain>
        <TitleSub>
          At our digital marketing agency, we offer a range of services to{" "}
          <br /> help businesses grow and succeed online. These services
          include:
        </TitleSub>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center p-4 m-auto">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  );
}
