import { Suspense } from 'react';
import Link from 'next/link';

import MealsGrid from '../../components/meal-grid'
import { getMeals } from '@/lib/meals';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-300 text-[#ddd6cb] text-2xl">
        <h1 className="font-['Montserrat',sans-serif]">
          Delicious meals, created{' '}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="m-0">
          <Link
            href="/meals/share"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className="text-center animate-loading">Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}