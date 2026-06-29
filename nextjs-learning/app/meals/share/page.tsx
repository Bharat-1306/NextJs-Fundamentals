import ImagePicker from '../../../components/image-picker';

const inputClass =
  'block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-["Montserrat",sans-serif] text-[#ddd6cb] focus:[outline-color:#f99f2a] focus:bg-[#1f252d]';

const labelClass =
  'block mb-2 text-base font-["Montserrat",sans-serif] uppercase text-[#b3aea5] font-bold';

export default function ShareMealPage() {
  return (
    <>
      <header className="gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-300 text-[#ddd6cb] text-2xl">
        <h1 className="font-['Montserrat',sans-serif]">
          Share your{' '}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-300 my-12 mx-auto">
        <form className="max-w-200">
          <div className="flex gap-4">
            <p className="w-full">
              <label htmlFor="name" className={labelClass}>Your name</label>
              <input type="text" id="name" name="name" required className={inputClass} />
            </p>
            <p className="w-full">
              <label htmlFor="email" className={labelClass}>Your email</label>
              <input type="email" id="email" name="email" required className={inputClass} />
            </p>
          </div>
          <p>
            <label htmlFor="title" className={labelClass}>Title</label>
            <input type="text" id="title" name="title" required className={inputClass} />
          </p>
          <p>
            <label htmlFor="summary" className={labelClass}>Short Summary</label>
            <input type="text" id="summary" name="summary" required className={inputClass} />
          </p>
          <p>
            <label htmlFor="instructions" className={labelClass}>Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className={inputClass}
            ></textarea>
          </p>
          <ImagePicker />
          <p className="text-right">
            <button
              type="submit"
              className="border-0 py-3 px-8 bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-sm cursor-pointer font-[inherit] text-xl shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241]"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}