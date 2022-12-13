import Head from "next/head";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const Home = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [state, setState] = useState("start");
  const [contest, setContest] = useState(false);

  useEffect(() => {
    if (contest) {
      setTimeout(() => setContest(false), 10000);
    }
  }, [contest]);

  useEffect(() => {
    if (isExploding) {
      setTimeout(() => setIsExploding(false), 10000);
    }
  }, [isExploding]);

  useEffect(() => {
    setContest(false);
  }, [state]);

  const init = () => {
    setState("start");
    setContest(false);
    setIsExploding(false);
  };

  return (
    <div className="h-screen border-box">
      <Head>
        <title>Bersy Home Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ef4444"></meta>
      </Head>

      <main className="h-full flex items-center justify-between flex-nowrap  flex-col space-y-8">
        <div className="px-2 py-4">
          <p className="text-4xl text-white font-bold animate-pulse">
            Buon Natale 🎄
          </p>
        </div>
        {isExploding && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ConfettiExplosion />
          </div>
        )}

        {state === "start" ? (
          <>
            <div className="flex w-full items-center justify-center flex-nowrap space-x-4">
              <div className="text-white text-xl font-bold px-4 text-center">
                <p>
                  Quest'anno ho deciso che non serve alcun regalo, sono 2 anni
                  ormai che stiamo insieme.
                </p>
                <p>Basta il pensiero... giusto?</p>
              </div>
            </div>
            <div className="p-4 flex flex-col space-y-2 w-full items-center">
              {contest && (
                <p className="p-4 animate-bounce text-white text-base flex items-center justify-center">
                  😾 Kobe: "Solo io posso protestare! kè kè"
                </p>
              )}
              <div className="flex space-x-4">
                <button
                  className="bg-sky-600 text-white px-2 py-3 min-w-[6rem] rounded-md w-20"
                  onClick={() => setState("step2")}
                >
                  Ma certo!
                </button>
                <button
                  className="bg-red-500 text-white rounded-md min-w-[6rem] px-2 py-3"
                  onClick={() => setContest(true)}
                >
                  Protesto
                </button>
              </div>
            </div>
          </>
        ) : state === "step2" ? (
          <>
            <div className="flex w-full items-center justify-center flex-nowrap space-x-4">
              <div className="text-white text-xl font-bold px-4 text-center">
                <p>Esatto! Il pensiero...</p>
                <p>
                  ...e sono ormai tantissimi giorni che penso sempre alla stessa
                  cosa
                </p>
              </div>
            </div>
            <div className="p-4 flex flex-col space-y-2 w-full items-center">
              {contest && (
                <p className="animate-bounce p-4 text-white text-base flex items-center justify-center">
                  😾 Kobe: "kè kè kè kè kè kè!!"
                </p>
              )}
              <div className="flex space-x-4">
                <button
                  className="bg-sky-600 text-white px-2 py-3 min-w-[6rem] rounded-md w-20"
                  onClick={() => setState("step3")}
                >
                  A cosa?
                </button>
                <button
                  className="bg-red-500 text-white rounded-md min-w-[6rem] px-2 py-3"
                  onClick={() => setContest(true)}
                >
                  Protesto!!
                </button>
              </div>
            </div>
          </>
        ) : state === "step3" ? (
          <>
            <div className="flex w-full items-center justify-center flex-nowrap space-x-4">
              <div className="text-white text-xl font-bold px-4 text-center">
                <p>Simo...</p>
                <p className="text-3xl">MI VUOI SPOSARE?</p>
              </div>
            </div>
            <div className="p-4 flex flex-col space-y-2 w-full items-center">
              {contest && (
                <p className="animate-bounce p-4 text-white text-base flex items-center justify-center">
                  😿 Kobe: "pensaci bene..."
                </p>
              )}
              <div className="flex space-x-4">
                <button
                  className="bg-sky-600 text-white text-2xl px-2 py-3 min-w-[6rem] rounded-md w-48"
                  onClick={() => {
                    setState("final");
                    setIsExploding(true);
                  }}
                >
                  Sì 💍
                </button>
                <button
                  className="bg-red-500 text-white rounded-md min-w-[3rem] px-2 py-3"
                  onClick={() => setContest(true)}
                >
                  NO
                </button>
              </div>
            </div>
          </>
        ) : state === "final" ? (
          <>
            <div className="flex w-full items-center justify-center flex-nowrap space-x-4">
              <div className="text-white text-xl font-bold px-4 text-center">
                <p>Simo...</p>
                <p className="text-6xl">TI AMO ❤️</p>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <button
                className="bg-red-500 text-white rounded-md min-w-[3rem] px-2 py-3"
                onClick={() => init()}
              >
                Ho sbagliato, ricomincio!
              </button>
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
