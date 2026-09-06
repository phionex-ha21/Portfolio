export default function Footer() {
  return (
    <footer className="border-t border-primary/20 py-8 text-center">

      <p className="text-white">

        © {new Date().getFullYear()} Madhav Yadav

      </p>

      <p className="text-secondary mt-2">

        Built with React • Tailwind CSS • Framer Motion

      </p>

    </footer>
  );
}