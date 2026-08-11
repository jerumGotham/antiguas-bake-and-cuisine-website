"use client"

import Image from "next/image"
import { useState, type ComponentProps } from "react"

import { businessContent } from "@/content/business"
import type { Product } from "@/content/menu"
import { cn } from "@/lib/utils"

type ImagePlaceholderProps = { readonly image?: Product["image"]; readonly className?: string; readonly sizes?: ComponentProps<typeof Image>["sizes"]; readonly priority?: boolean }

function Fallback({ className }: { className?: string }) {
  return <div className={cn("flex aspect-[4/3] min-w-0 flex-col items-center justify-center border border-border/60 bg-card p-4 text-center", className)}><p className="font-sans text-sm font-semibold leading-6 text-foreground">{businessContent.placeholders.imageLabel}</p><p className="mt-2 max-w-[65ch] font-sans text-base leading-6 text-foreground">{businessContent.placeholders.detail}</p></div>
}

export function ImagePlaceholder({ image, className, sizes = "(min-width: 768px) 50vw, 100vw", priority = false }: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false)
  if (!image?.src || !image.alt.trim() || failed) return <Fallback className={className} />
  return <div className={cn("relative aspect-[4/3] min-w-0 overflow-hidden bg-card", className)}><Image fill alt={image.alt.trim()} className="object-cover" onError={() => setFailed(true)} priority={priority} sizes={sizes} src={image.src} /></div>
}
