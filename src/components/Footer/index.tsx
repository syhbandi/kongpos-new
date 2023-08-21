const Footer = () => {
  return (
    <footer className="py-10 font-roboto bg-slate-100">
      <div className="container mx-auto max-w-7xl px-6 flex justify-center items-center">
        <div>
          &copy;{new Date().getFullYear()} KongPos dari{" "}
          <a href="https://www.misterkong.com" target="_blank" rel="noreferrer">
            <strong> Misterkong</strong>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
