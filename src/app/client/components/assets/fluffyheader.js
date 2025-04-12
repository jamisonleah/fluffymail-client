export default function FluffyHeader() {
  return (
    <div className="flex items-center justify-between bg-strawberry-milk text-black px-6 py-4 rounded-t-2xl">
    {/* Left: App Title */}
    <h1 className="text-3xl font-lilita-one font-bold text-white">
      FluffyMail
    </h1>

    {/* Right: Nav-like Buttons (fake window controls or nav links) */}
    <nav className="flex items-center space-x-25">
      <button className="text-lg font-medium text-white hover:text-berry-mauve">dashboard</button>
      <button className="text-lg font-medium text-white hover:text-berry-mauve">profile</button>
      <button className="text-lg font-medium text-white hover:text-berry-mauve">settings</button>

      {/* Optional: Window Dots (Still Cute!) */}
      <div className="flex items-center space-x-1 ml-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </nav>
  </div>
  )
}