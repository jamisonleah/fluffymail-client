import Icon from '@/components/Icon';
export default function SearchBar({ onSerch }) {
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto py-3">
      {/* Input + Icon container */}
      <div className="relative flex-1">
        {/* Icon inside input */}
        <Icon
          name="email-client/icons8-search-100"
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        {/* Input field with left padding for icon */}
        <input
          type="text"
          placeholder="Search emails..."
          className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blueberry-sky"
        />
      </div>

      {/* Clear button */}
      <button className="ml-2 bg-blueberry-sky text-white px-4 py-2 rounded-lg shadow hover:bg-blueberry-sky/80">
        Clear
      </button>
    </div>

  );
}