const WhatsApp = () => {
  return (
    <div className="bg-[#25D366] text-white p-4 rounded-md hover:scale-110 cursor-pointer">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/237697798853"
        className="flex gap-2 items-center"
        target="_blank"
      >
        <img
          alt="Discuter sur WhatsApp"
          src="/whatsapp.svg"
          className="h-8 w-8"
        />
        <span className="font-bold max-sm:text-sm">
          Get In Touch on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsApp;
