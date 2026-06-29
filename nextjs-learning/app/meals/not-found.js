export default function NotFound() {
  return (
    <main className="mt-20 text-center">
      <h1 className="text-[5rem] m-0 font-black uppercase bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent font-['Montserrat',sans-serif]">
        Meal not found
      </h1>
      <p className="text-2xl font-medium text-[#ddd8d8]">
        Unfortunately, we could not find the requested page or meal data.
      </p>
    </main>
  );
}