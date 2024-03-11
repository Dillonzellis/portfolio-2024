export const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy;{new Date().getFullYear()} Dillonzellis. All rights reserved.
      </small>
      <p className="text-xs">
        This site was built with Next.js, Typescript, Tailwind, and Framer
        Motion
      </p>
    </footer>
  );
};
