"use client";
import { useParams } from "next/navigation";
import Navbar from "@/app/_components/navbar";
import PageIntro from "@/app/_components/PageIntro";
import Slider from "@/app/_components/Slider";
import VideoPlayer from "@/app/_components/VideoPlayer";
import ContactForm from "@/app/_components/ContactForm";
import { InfoShowCase } from "@/app/_components/InfoShowCase";
import ownershipData from "../../../public/ownershipData.json";

const page = () => {
  const params = useParams();
  const { id } = params;


  const horse = ownershipData.horse_data.find((h) => h.id === parseInt(id));

  if (!horse) {
    return <p className="text-center mt-10">Horse details not found.</p>;
  }
  const { url } = horse;

  const infoData = {
    name: horse.name,
    age: horse.age,
    breed: horse.breed,
    image: horse.image,
    url: horse.url,
    // purchasePrice: horse.sharePrice,
    // location: horse.location,
    // saleYear: horse.saleYear, 
    pedigree: {
      title: "Elite Pedigree",
      description: horse.detailDescription.join(" "), 
    },
  //   familyOfChampions: {
  //     title: "Family of Champions",
  //     description: horse.familyOfChampionsDescription,
  //     relatives: horse.familyOfChampionsRelatives,
  //     note: horse.familyOfChampionsNote,
  //   },
  //   presenceAndPotential: {
  //     title: "Presence, Poise & Potential",
  //  physical: horse.presenceAndPotentialPhysical,
  //   temperament: horse.presenceAndPotentialTemperament,
  //   },
  //   investmentOpportunity: {
  //     title: "Investment Opportunity",
  //     description: horse.investmentOpportunityDescription,
  //   },
    expressionOfInterest: {
      title: "Expression Of Interest",
      // question: horse.expressionOfInterestQuestion,
      callToAction:
        "Click the link below to get in contact and more information on how you can get involved with this young Colt.",
    },
  };

  return (
    <div className="mx-6 lg:mx-12">
      <Navbar hasBackgroundImage={false} />
      <PageIntro
        mainHeading="Ownership"
        intro="At Vahala Racing, ownership is more than a title — it’s an invitation to become part of a legacy built on passion, precision, and purpose. Every experience brings you closer to the heart of the sport, from early-morning training sessions to thrilling race-day victories. With Vahala, you step into a world where dedication, teamwork, and the pursuit of excellence define every stride."
      />
      <Slider data={infoData} />
      <InfoShowCase data={infoData} />
      <div className="flex justify-center">
        <VideoPlayer url={horse.url} />
      </div>
      <div className="py-6 lg:py-14">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
