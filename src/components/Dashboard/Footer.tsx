const Footer = () => {
  return (
    <div className="mt-auto bg-white p-5 text-right font-roboto">
      &copy;{new Date().getFullYear()} KongPos dari{" "}
      <a href="https://www.misterkong.com" target="_blank" rel="noreferrer">
        <strong> Misterkong</strong>
      </a>
    </div>
  );
};

export default Footer;
