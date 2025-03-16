const Footer = () => {
  return (
    <footer className="p-10 rounded footer footer-horizontal footer-center bg-base-200 text-base-content">
      <aside className="text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          TRAVELDOC.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
