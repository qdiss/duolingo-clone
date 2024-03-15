import { Button } from "@/components/ui/button";
import Image from "next/image";

const images = [
  {
    src: "/hr.svg",
    alt: "Croatian",
  },
  {
    src: "/it.svg",
    alt: "Italian",
  },
  {
    src: "/es.svg",
    alt: "Spanish",
  },
  {
    src: "/jp.svg",
    alt: "Japanese",
  },
  {
    src: "/fr.svg",
    alt: "French",
  },
];

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {images.map((image, index) => (
          <Button size="lg" variant="ghost" className="w-full" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={40}
              height={32}
              className="mr-2 rounded-md"
            />
            {image.alt}
          </Button>
        ))}
      </div>
    </footer>
  );
};
