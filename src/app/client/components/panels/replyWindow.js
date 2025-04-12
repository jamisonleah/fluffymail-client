import Icons from "@/components/Icon";
export default function ReplyWindow({ selectedEmail }) {
  return (
    <div className="w-full my-10 bg-baby-pink p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        < Icons name="email-client/icons8-reply-100" size={20} className="text-white" />
        <p className="text-lg font-thin font-sans text-gray-700">
          To:
        </p>
        <p className="text-sm bg-berry-mauve font-semibold rounded-full py-1 px-5 opacity-80">
          {selectedEmail.sender.name}
        </p>
      </div>
      <textarea
        className="w-full h-32 p-2 border-2 border-white rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blueberry-sky"
        placeholder="Type your reply here..."
      ></textarea>

      {/* Reply Buttons and Actions */}
      <div className="flex items-center justify-between mt-4 w-full">
        {/* Send Button on the left */}
        <button className="flex items-center bg-blueberry-sky text-white px-4 py-2 font-semibold rounded hover:bg-blueberry-sky-hover">
          Send
          <Icons name="email-client/icons8-paper-plane-white-100" size={20} className="ml-2" />
        </button>

        {/* Additional Action Icons on the right */}
        <div className="flex items-center gap-2">
          <Icons name="email-client/icons8-attach-100" size={35} className="text-gray-600 bg-white hover:bg-gray-100 p-2 rounded-lg" />
          <Icons name="email-client/icons8-picture-100" size={35} className="text-gray-600 bg-white hover:bg-gray-100 p-2 rounded-lg" />
          <Icons name="email-client/icons8-menu-vertical-100" size={35} className="text-gray-600 bg-white hover:bg-gray-100 p-2 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
