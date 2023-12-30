"use client";

import { useIntlDictionary } from "@/hooks/lang-dict";

export default function Location() {
  const [, intlDictionary] = useIntlDictionary();

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex flex-col gap-4 w-full max-w-screen-md">
        <div className="w-full text-2xl text-center pb-1 border-b border-sage-600">
          {intlDictionary?.locationTitle}
        </div>

        <div>
          {intlDictionary?.locationPlacePart1}{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-apricot-700 hover:underline"
            href="https://napvolgy.hu"
          >
            Nap-völgy Borászat és Élménybirtok
          </a>{" "}
          {intlDictionary?.locationPlacePart2}
        </div>

        <div>
          {intlDictionary?.locationPlacePart3} (
          <a
            target="_blank"
            rel="noreferrer"
            className="text-apricot-700 hover:underline"
            href="https://www.google.com/maps/place/Márai+Aktív+Turisztikai+Látogatóközpont/@47.8899946,20.358908,18.45z/data=!4m15!1m8!3m7!1s0x47408d736e96e397:0xd7bf802eedeafe1d!2sEger,+Szépasszonyvölgy+u.+35,+3300+Hungary!3b1!8m2!3d47.8938175!4d20.3635649!16s%2Fg%2F11c25311xk!3m5!1s0x47408d6d446ac9fb:0x8d3ed435b8898c94!8m2!3d47.8895226!4d20.359207!16s%2Fg%2F11bwqm56yq?entry=ttu"
          >
            {intlDictionary?.locationPlacePart4}
          </a>
          ){intlDictionary?.locationPlacePart5}
        </div>

        <div>{intlDictionary?.locationGpsInfo}</div>

        <div>{intlDictionary?.locationFollowMap}</div>
      </div>

      <div className="w-full sm:w-4/5 border border-sage-600 rounded-xl">
        <iframe
          className="w-full h-[600px] rounded-xl"
          src="//umap.openstreetmap.fr/de/map/unbenannte-karte_1004358?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&captionMenus=false"
        ></iframe>
      </div>
    </div>
  );
}
