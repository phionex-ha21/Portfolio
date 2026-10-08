import { FiDownload, FiFileText } from "react-icons/fi";

export default function BugReport() {
  return (
    <section className="px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-y border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <FiFileText className="shrink-0 text-[#35E06F]" size={26} />
          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#35E06F]">
              Quality Assurance
            </p>
            <h2 className="text-2xl font-bold text-primary">Bug Report</h2>
          </div>
        </div>

        <a
          href="/BUG%20REPORT.pdf"
          download
          className="inline-flex w-fit items-center gap-2 border border-[#35E06F]/50 px-4 py-3 text-sm font-semibold text-[#35E06F] transition hover:bg-[#35E06F] hover:text-[#050b14]"
        >
          Download report
          <FiDownload size={16} />
        </a>
      </div>
    </section>
  );
}