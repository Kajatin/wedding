import Rsvp from "@/components/rsvp";
import Location from "@/components/location";
import LanguagePicker from "@/components/lang-picker";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4 gap-10">
      <Location />
      <Rsvp />
      <LanguagePicker />
    </main>
  );
}
