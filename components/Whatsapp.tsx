import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/917904505254"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition p-4 rounded-full shadow-lg z-50"
    >

      <FaWhatsapp size={30} />

    </a>
  );
}