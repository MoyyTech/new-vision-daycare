export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Temporary Homepage - We will improve this together */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-6">
            New Vision Daycare
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A loving, Christian-based daycare in Brooklyn, NY
          </p>
          <p className="text-gray-500 mb-10">
            Website is under construction. We are building something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3473651822" className="btn-primary">
              Call Us: (347) 365-1822
            </a>
            <a href="#" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}