import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  items-center justify-between pt-20 ${roboto.className}`}
    >
      <section className="flex flex-col items-center mainBg px-5 w-full">
        <div className="flex gap-4 items-center justify-center mt-20 max-w-screen-xl m-auto">
          <a href="#">
            <img src="/icons/insta.svg" alt="" />
          </a>
          <a href="#">
            <img src="/icons/wp.svg" alt="" />
          </a>
          <a href="#">
            <img src="/icons/lkdin.svg" alt="" />
          </a>
          <a href="#">
            <img src="/icons/tt.svg" alt="" />
          </a>
        </div>
        <h1 className="text-8xl font-light text-center gradientText p-2 mt-10 max-w-screen-xl m-auto">
          Amazing website creation with Pantecnologia!
        </h1>
        <p className="text-base mt-4 text-white max-w-screen-xl m-auto">
          help you to build website company that is modern, user friendly, good
          CEO, and Clean design
        </p>
        <button className="bg-white rounded-full p-4 px-5 mt-10">
          Get Started
        </button>
        <img className="mt-10" src="/scroll.svg" alt="" />
      </section>

      <section className="mt-32 px-5 max-w-screen-xl m-auto">
        <h2 className="gradientText text-7xl font-light p-2">
          Companies that can help you in
          <br /> developing your company for the future
        </h2>
        <p className="text-base text-white max-w-lg p-2">
          Work in the IT field includes Web Design, UI/UX Design, Branding and
          Shopify Development
        </p>
      </section>
      <section className="mt-32 px-5"></section>
    </main>
  );
}
