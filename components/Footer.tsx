export default function Footer() {
  const projectYear = new Date().getFullYear()
  return (

    <footer className="border-t border-line py-8">
      <div className="container flex flex-wrap items-center justify-between gap-3 text-[12.5px] font-medium text-ink-faint">
        <span>© {projectYear} busandcode.</span>
        <span>Nigeria</span>
      </div>
    </footer>
  );
}
