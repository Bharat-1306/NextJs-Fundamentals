import Link from 'next/link';
import ImageSlideshow from '@/components/image-slideshow';

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-30 mx-auto w-[90%] max-w-300">
        <div className="w-160 h-100">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-2xl">
            <h1 className="text-3xl font-bold font-['Montserrat',sans-serif] tracking-[0.15rem] uppercase bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste &amp; share food from all over the world.</p>
          </div>
          <div className="text-2xl flex gap-4">
            <Link
              href="/community"
              className="inline-block mt-4 px-4 py-2 text-[#ff9b05] font-normal no-underline hover:text-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-200 w-[90%] my-8 mx-auto text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-200 w-[90%] my-8 mx-auto text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
