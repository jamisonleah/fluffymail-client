import Icon from "@/components/Icon";
import { formatDate, daysAgo } from "@/utils/dateUtils"; // adjust path as needed
export default function EmailCard({ email, onClick, selectedEmail }) {

  const isSelected = selectedEmail && selectedEmail.id === email.id;

  const avatar = email.sender ? email.sender.avatar : "kawaii/kawaii-bunny"; // Fallback to default avatar if not provided
  const name = email.sender ? email.sender.name : "Unknown Sender"; // Fallback to default name if not provided
  return (
    <div
      className={`p-4 bg-white rounded-lg border-4 shadow-md mb-4 cursor-pointer transition-all ${email.isRead ? "opacity-50 " : "opacity-80"} ${isSelected ? "p-4 border-4 border-blueberry-sky" : ""}`}
      onClick={() => onClick(email)}
    >
      <div className="flex justify-between items-start">
        <div className="w-full flex items-start gap-3">
          {/* Icon on the left */}
          <Icon name={avatar} size={40} />

          {/* Text stacked vertically on the right */}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold font-sans text-gray-800">{name}</h2>
            <p className="text-xs text-berry-mauve opacity-80">
              {formatDate(email.date)} • {daysAgo(email.date)}
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-md font-semibold text-gray-800 mt-2">
        {email.subject}
      </h3>
      <p className="text-berry-mauve text-sm line-clamp-3">{email.body}</p>
    </div>
  );
}
