import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';

export default async function MealDetailsPage({ params }: { params: Promise<{ mealslug: string }> }) {
  // params is a Promise in Next.js 15 — must be awaited before accessing route segments
  const { mealslug } = await params;
  const meal = getMeal(mealslug);
  console.log("meal", meal);

  // triggers Next.js built-in not-found page when slug doesn't exist in DB
  if (!meal) {
    notFound();
  }

  // instructions are stored as plain text; convert newlines to <br /> for HTML rendering
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className="flex py-8 px-4 gap-12 mx-auto max-w-[80rem]">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-fade-slide-in-from-left"
          />
        </div>
        <div className="px-4 pt-2 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-in-from-right">
          <h1 className="m-0 text-[3.5rem] uppercase font-['Montserrat',sans-serif] [text-shadow:0_0_0.5rem_rgba(0,0,0,0.5)]">
            {meal.title}
          </h1>
          <p className="text-2xl text-[#cfa69b] italic">
            by{' '}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* dangerouslySetInnerHTML is safe here — instructions come from our own DB, not user input */}
        <p
          className="text-xl leading-normal bg-[#6e6464] text-[#13120f] rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] p-8 max-w-[60rem] my-8 mx-auto animate-fade-slide-in-from-bottom"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
