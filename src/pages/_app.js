import "src/styles/globals.css";

function Application({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-b from-red-500 to-green-900">
      <Component {...pageProps} />
    </div>
  );
}

export default Application;
