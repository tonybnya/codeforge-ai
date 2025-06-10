import { Send } from "lucide-react";
import { useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import WhatsApp from "../components/WhatsApp.jsx";
import OrDivider from "../components/OrDivider.jsx";

const LandingContact = ({ className = "", onSubmit }) => {
  // Create a ref for the redirect input field
  const redirectInputRef = useRef(null);

  // Set the complete URL for redirection when component mounts
  useEffect(() => {
    if (redirectInputRef.current && typeof window !== "undefined") {
      redirectInputRef.current.value = `${window.location.origin}/thanks`;
    }
  }, []);

  // Note: First submission to FormSubmit.co will send a confirmation email to the form owner's email
  // The form owner must click the confirmation link before emails will be delivered

  const handleSubmit = (event) => {
    // Log form submission for debugging
    console.log("Form submitted");

    // Call the onSubmit prop if provided
    if (onSubmit) {
      onSubmit(event);
    }

    // Allow the default form submission to proceed - do not prevent default
  };

  return (
    <div
      id="contact"
      className={`text-white w-full max-w-4xl mx-auto p-6 my-40 bg-[#09090b] rounded-lg shadow-md border border-gray-800 ${className}`}
    >
      <div className="flex items-center justify-center">
        <WhatsApp />
      </div>

      <OrDivider />

      <p className="mb-8 text-center">
        Fill in the form below and we'll get back to you as soon as possible.
      </p>

      <form
        method="POST"
        action="https://formsubmit.co/tonybnya@gmail.com"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Pierre Ndoumbe"
              required
              minLength={3}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="ndoumbe.pierre@gmail.com"
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Do not hesitate to ask your questions..."
              className="min-h-[120px] w-full bg-background"
              required
              minLength={10}
            />
          </div>
        </div>

        {/* FormSubmit.co configuration fields */}
        <input
          type="hidden"
          name="_subject"
          value="CodeForgeAI - New message!"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          ref={redirectInputRef}
          defaultValue="/thanks"
        />
        {/* Honeypot field to prevent spam */}
        <input type="text" name="_honey" style={{ display: "none" }} />
        {/* Disable email auto-response */}
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for your message. We will contact you as soon as possible."
        />
        {/* Disable email template */}
        <input type="hidden" name="_template" value="table" />

        <div className="flex items-center justify-center">
          <Button
            type="submit"
            className="w-full md:w-[50%] !bg-[#1ba94c] hover:!bg-[#158f3e] hover:cursor-pointer hover:scale-105"
          >
            <Send className="mr-2 h-4 w-4" /> Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LandingContact;
