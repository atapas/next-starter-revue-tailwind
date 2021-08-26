export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://twitter.com/tapasadhikary/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Tapas Adhikary
          </a>
        </li>

        <li>
          <a
            href="https://github.com/atapas/next-starter-revue-tailwind"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
