import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-snug md:pr-8 font-sans">
        ArdaT Blog
      </h1>
      <h4 className="text-center md:text-left text-base mt-3 md:pl-8 font-sans">
        Hoşgeldiniz
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
        </a>{" "}
      </h4>
    </section>
  );
}
