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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc2626"></meta>
      </Head>

      <main className="h-3/4 flex items-center justify-between flex-nowrap  flex-col space-y-8">
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
                <p className="p-4 animate-bounce text-white text-base flex items-center justify-center font-bold">
                  😾 Kobe: "Solo io posso protestare! kè kè"
                </p>
              )}
              <div className="flex space-x-4">
                <button
                  className="bg-sky-600 text-white px-2 py-3 min-w-[6rem] rounded-md w-20 font-bold"
                  onClick={() => setState("step2")}
                >
                  Ma certo!
                </button>
                <button
                  className="bg-red-600 text-white rounded-md min-w-[6rem] px-2 py-3 font-bold"
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
                <p className="animate-bounce p-4 text-white text-base flex items-center justify-center font-bold">
                  😾 Kobe: "kè kè kè kè kè kè!!"
                </p>
              )}
              <div className="flex space-x-4">
                <button
                  className="bg-sky-600 text-white px-2 py-3 min-w-[6rem] rounded-md w-20 font-bold"
                  onClick={() => setState("step3")}
                >
                  A cosa?
                </button>
                <button
                  className="bg-red-600 text-white rounded-md min-w-[6rem] px-2 py-3 font-bold"
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
                <p className="animate-bounce p-4 text-white text-base flex items-center justify-center font-bold">
                  😿 Kobe: "pensaci bene..."
                </p>
              )}
              <div className="flex space-x-4">
                <button
                  className="bg-sky-600 text-white text-2xl px-2 py-3 min-w-[6rem] rounded-md w-48 font-bold"
                  onClick={() => {
                    setState("final");
                    setIsExploding(true);
                  }}
                >
                  Sì 💍
                </button>
                <button
                  className="bg-red-600 text-white rounded-md min-w-[3rem] px-2 py-3 font-bold"
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
                <p>L'amore vince sempre</p>
                <p className="text-6xl">TI AMO ❤️</p>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <button
                className="bg-sky-600 text-white text-2xl px-2 py-3 min-w-[6rem] rounded-md w-48 font-bold"
                onClick={() => {
                  setState("letter");
                }}
              >
                Per te 💌
              </button>
              <button
                className="bg-red-600 text-white rounded-md min-w-[3rem] px-2 py-3 font-bold"
                onClick={() => init()}
              >
                Volevo dire NO!
              </button>
            </div>
          </>
        ) : state === "letter" ? (
          <>
            <div className="flex w-full flex-nowrap space-x-4 overflow-y-auto">
              <div className="text-white italic text-lg font-bold px-4 text-left">
                <p>Sei stata il mio primo amore,</p>
                <p>Lo sei ancora oggi,</p>
                <p>E sempre lo sarai.</p>
                <p>
                  Da ragazzini fu un colpo di fulmine, non sapevo cosa fosse
                  l'amore e tu me l'hai insegnato, anche con un "pugno in
                  faccia" che però mi ha aperto gli occhi. Ho capito cosa
                  significasse amare: se non dai tutto te stesso, non potrai mai
                  essere felice e non potrai mai ricevere altrettanto.
                </p>
                <p>
                  Il bello, poi, è che ben 15 anni dopo, ossia 2 anni fa, sei
                  riuscita a ricordarmelo. Perchè io nel mentre ho dimenticato
                  come fosse davvero fatto l'amore.
                </p>
                <p>Oggi mi basta guardarti e lo so.</p>
                <p>
                  Lo so mentre ti guardo negli occhi, così intensamente, perchè
                  mi piace leggerti dentro.
                </p>
                <p>
                  Lo so mentre dormi, perchè un letto senza di te (e kobe) non
                  lo riesco più ad immaginare.
                </p>
                <p>
                  Lo so mentre ridi, mentre parli in quel modo che fai solo con
                  me, mentre ci stuzzichiamo.
                </p>
                <p>
                  Lo so mentre ti guardo giorno dopo giorno raggiungere i tuoi
                  traguardi. Perchè ti stimo tantissimo e, da sola, con le tue
                  sole forze, potresti raggiungere la Luna se solo lo volessi.
                </p>
                <p>
                  Lo so da quando mi hai detto di non lasciarti andare, di non
                  arrendermi, quel giorno, su questo divano.
                </p>
                <p>
                  Io non voglio lasciarti andare, anzi, io ti voglio con me...
                </p>
                <p>...per sempre.</p>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <button
                className="bg-red-600 text-white rounded-md min-w-[3rem] px-2 py-3 font-bold"
                onClick={() => init()}
              >
                Ricominciamo...
              </button>
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
