import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[90vw] bg-white mx-auto py-[5vh] px-[2vw] min-h-screen">
      <main className="flex flex-col gap-[32px] items-center sm:items-start min-h-[86vh]">
        <div>
          <h1>Hello World</h1>
          <p>this is the start</p>
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center bg-amber-700 mt-8 w-2xl mx-auto">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Calvin Carl Coderes
        </a>
      </footer>
    </div>
  );
}
