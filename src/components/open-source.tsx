"use client";

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link";
import { cn } from "@/lib/utils"


export default function OpenSource() {
  const contributions = [
    {
      "id": 1,
      "title": "Universal Media Server",
      "description": "A free, open-source DLNA, UPnP and HTTP/S media server written in Java.\n\nStreams or transcodes nearly any media format to TVs, gaming consoles, smartphones, and more with minimal setup.\n\nOriginally forked from PS3 Media Server for better stability, broader format support, and ease of use.",
      "tags": ["Java", "DLNA/UPnP", "Open-Source"],
      "github": "https://github.com/UniversalMediaServer",
      "live": "https://www.universalmediaserver.com/"
    },
    {
      "id": 2,
      "title": "LF Energy – Hyphae APIS",
      "description": "Open-source microgrid software for peer-to-peer renewable energy exchange.\n\nAutomates distribution and balancing of power between local storage systems over DC and AC grids.\n\nEvolved from Sony CSL’s APIS project, now part of LF Energy’s microgrid tools.",
      "tags": ["Microgrid", "P2P energy", "Open-Source"],
      "github": "https://github.com/hyphae",
      "live": "https://lfenergy.org/projects/hyphae/"
    }
  ]

  const [activeContributions, setActiveContributions] = useState<null | number>(null)
  return (
    <section className="mb-12 w-full max-w-[648px]">
      <h2 className="text-xl mb-6 text-accent-blue">OSS Contributions</h2>
      <div className="space-y-4">
        {contributions.slice().reverse().map((contribution, index) => (
          <div
            key={contribution.id}
            className={cn(
              "border-l-2 pl-4 py-1 cursor-pointer",
              activeContributions === index ? "border-accent-blue" : "border-black/20",
            )}
            onClick={() =>
              setActiveContributions(activeContributions === index ? null : index)
            }
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{contribution.title}</h3>
              <div className="flex items-center justify-center gap-2">
                {contribution.github && (
                  <Link
                    href={contribution.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/60 hover:text-accent-blue transition-colors ml-2"
                  >
                    <Github size={16} />
                    <span className="sr-only">GitHub</span>
                  </Link>
                )}
                {contribution.live && (
                  <Link
                    href={contribution.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/60 hover:text-accent-blue transition-colors ml-2"
                  >
                    <ExternalLink size={16} />
                    <span className="sr-only">Live Site</span>
                  </Link>
                )}
              </div>
            </div>

            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                activeContributions === index ? "max-h-96 mt-2" : "max-h-0"
              )}
            >
              <div className="text-[0.8125rem] md:text-sm text-black/70 cursor-default">
                <p className="mb-2 whitespace-pre-line">{contribution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {contribution.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-accent-blue">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
