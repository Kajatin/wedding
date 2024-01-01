import Photos from "@/components/photos";
import Contact from "@/components/contact";
import Welcome from "@/components/welcome";
import Presents from "@/components/presents";
import Location from "@/components/location";
import Itinerary from "@/components/itinerary";
import Accomodation from "@/components/accomodation";
import LanguagePicker from "@/components/lang-picker";
import CountdownToWedding from "@/components/countdown";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Welcome />
      <div className="flex flex-col items-center p-4 gap-10">
        <CountdownToWedding />
        <Itinerary />
        <Location />
        <Presents />
        <Accomodation />
        <Photos />
        <Contact />
      </div>

      <div className="flex justify-center pt-12 pb-16">
        <LanguagePicker />
      </div>
    </main>
  );
}
