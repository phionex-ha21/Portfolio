export default function Footer() {
  return (
    <footer className="border-t border-green-500/20 py-8 text-center">

      <p className="text-gray-500">

        © {new Date().getFullYear()} Madhav Yadav

      </p>

      <p className="text-green-500 mt-2">

        Built with React • Tailwind CSS • Framer Motion

      </p>

    </footer>
  );
}