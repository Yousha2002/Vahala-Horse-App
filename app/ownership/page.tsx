import Navbar from "../_components/navbar";
import { HorseCard } from "../_components/HorsesCard";
import PageIntro from "../_components/PageIntro";
import Link from "next/link";
import ownershipData from "../../public/ownershipData.json";

const page = () => {
  return (
    <div className="mx-6 lg:mx-12">
      <div>
        <Navbar hasBackgroundImage={false} />
      </div>
      <PageIntro
        mainHeading="Ownership"
        intro="At Vahala Racing, ownership is more than a title — it’s an invitation to become part of a legacy built on passion, precision, and purpose. Every experience brings you closer to the heart of the sport, from early-morning training sessions to thrilling race-day victories. With Vahala, you step into a world where dedication, teamwork, and the pursuit of excellence define every stride."
        blocks={[
          {
            heading: "Your Path Into the Vahala Experience",
            subHeading:
              "Feel the pride, excitement, and fulfillment that come with owning a racehorse.",
            paragraphs: [
              "At Vahala Racing, we believe every owner should feel deeply connected — to the horses, the team, and the journey that shapes each athlete. Our ownership opportunities offer a fully immersive experience, giving you an inside look at the training, development, and care that turn young prospects into champions.",
              "Through exclusive access, personalized updates, behind-the-scenes moments, and premium race-day hospitality, we ensure your ownership experience is both meaningful and unforgettable. You’ll witness the discipline, strategy, and passion that fuel our stable and strengthen the bond between horse, rider, and team.",
              "With Vahala Racing, you’re not just investing in a horse — you’re becoming part of a community where excellence is the standard and every victory is shared.",
            ],
          },
          {
            heading: "Step Into the Winner’s Circle",
            subHeading:
              "Feel the pride, excitement, and fulfillment that come with owning a racehorse.",
            paragraphs: [
              "Join us and experience a partnership built on trust, transparency, and a shared love for the sport. At Vahala Racing, every stride reflects the commitment of the people who believe in our horses — owners who stand with us on the path to greatness.",
            ],
          },
        ]}
      />

      <div className="flex flex-col gap-6 lg:gap-14 my-6 lg:mb-14">
        {ownershipData.horse_data.map((horse) => (
          <Link href={`/ownership/${horse.id}`} key={horse.id}>
            <HorseCard key={horse.id} {...horse} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
