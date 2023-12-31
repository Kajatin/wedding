import Rsvp from "@/components/rsvp";
import Location from "@/components/location";
import Itinerary from "@/components/itinerary";
import LanguagePicker from "@/components/lang-picker";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4 gap-10">
      <Rsvp />
      <Itinerary />
      <Location />
      <LanguagePicker />
    </main>
  );
}
