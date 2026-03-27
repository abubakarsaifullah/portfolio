import AnimatedSection from "@/components/animated-section";
import ContactForm from "@/components/contact-form";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full py-8">
      <AnimatedSection className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-10">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Contact
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Feel free to reach out for collaboration, project discussions, or opportunities.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.7fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Mail className="h-4 w-4 text-indigo-500" />
              abubakar.cs@gmail.com
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <MessageCircle className="h-4 w-4 text-indigo-500" />
              WhatsApp: +92 300 6416478
            </div>
          </div>

          <ContactForm />
        </div>
      </AnimatedSection>
    </div>
  );
}
