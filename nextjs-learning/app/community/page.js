import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className="flex flex-col gap-12 mx-auto my-12 mb-20 w-[90%] max-w-300 text-[#ddd6cb] text-2xl text-center">
        <h1 className="font-['Montserrat',sans-serif]">
          One shared passion:{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text [-webkit-background-clip:text] text-transparent [-webkit-text-fill-color:transparent]">
            Food
          </span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-160 mx-auto text-center">
        <h2 className="font-['Montserrat',sans-serif] text-4xl mb-12 text-[#ddd6cb]">
          Community Perks
        </h2>

        <ul className="list-none my-12 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image src={mealIcon} alt="A delicious meal" className="w-32 h-32 object-contain" />
            <p className="font-['Montserrat',sans-serif] text-2xl font-bold m-0 text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image src={communityIcon} alt="A crowd of people, cooking" className="w-32 h-32 object-contain" />
            <p className="font-['Montserrat',sans-serif] text-2xl font-bold m-0 text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="w-32 h-32 object-contain"
            />
            <p className="font-['Montserrat',sans-serif] text-2xl font-bold m-0 text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
