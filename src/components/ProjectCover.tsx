"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectCover({ url, name }: { url: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const src = `https://image.thum.io/get/width/800/crop/750/noanimate/${url}`;

  return (
    <div className="relative aspect-[8/5] overflow-hidden border-b border-line bg-surface-muted">
      {!loaded && (
        <span className="absolute inset-0 grid place-items-center px-5 text-center text-xs text-muted" role="status">
          {failed ? "Preview unavailable · Visit the live website" : "Loading website preview…"}
        </span>
      )}
      {!failed && (
        <Image
          src={src}
          alt={`Website preview of ${name}`}
          fill
          unoptimized
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transform-none ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
