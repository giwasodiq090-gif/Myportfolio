const Footer = () => {
  return (
    <footer className="border-t border-slate-800 px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:gap-4 sm:flex-row sm:text-left">
        <p className="text-xs text-slate-500 sm:text-sm">
          © {new Date().getFullYear()} Giwa Sodiq. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;