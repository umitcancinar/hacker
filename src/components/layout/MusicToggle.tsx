"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const KEY = "gk-music";
const SRC = "/audio/harput-zurna.mp3";

/**
 * Arka plan müziği. Tarayıcılar kullanıcı etkileşimi olmadan sesi engeller,
 * Varsayılan açıktır; otomatik oynatma engellenirse ilk etkileşimde başlar.
 * Kullanıcının kapatma tercihi sonraki ziyaretlerde de korunur.
 */
export function MusicToggle({
  labels,
  className = "",
}: {
  labels: { on: string; off: string };
  className?: string;
}) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const enabled = useRef(true);
  const [playing, setPlaying] = useState(true);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    let disposed = false;
    const el = new Audio(SRC);
    el.loop = true;
    el.volume = 0.35;
    el.preload = "none";
    el.addEventListener("error", () => setAvailable(false));
    audio.current = el;
    let wanted = true;
    try {
      wanted = localStorage.getItem(KEY) !== "off";
    } catch {
      // Depolama kapalı olsa da müzik düğmesi çalışır.
    }
    enabled.current = wanted;
    setPlaying(wanted);
    const start = () => {
      if (disposed || !enabled.current) return;
      void el.play().then(() => {
        if (disposed || !enabled.current) el.pause();
      }).catch(() => {
        // Tarayıcının ses izni için bir sonraki etkileşimi bekle.
      });
    };
    const onInteraction = (event: Event) => {
      if (event.target instanceof Element && event.target.closest("[data-music-toggle]")) return;
      if (el.paused) start();
    };
    if (wanted) start();
    document.addEventListener("pointerdown", onInteraction);
    document.addEventListener("keydown", onInteraction);
    return () => {
      disposed = true;
      enabled.current = false;
      document.removeEventListener("pointerdown", onInteraction);
      document.removeEventListener("keydown", onInteraction);
      el.pause();
      audio.current = null;
    };
  }, []);

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    const next = !enabled.current;
    enabled.current = next;
    setPlaying(next);
    try {
      localStorage.setItem(KEY, next ? "on" : "off");
    } catch {
      // Depolama kullanılamasa da açık/kapalı seçimi bu oturumda korunur.
    }
    if (!next) el.pause();
    else void el.play().then(() => {
      if (!enabled.current) el.pause();
    }).catch(() => {});
  };

  if (!available) return null;
  const Icon = playing ? Volume2 : VolumeX;

  return (
    <button
      type="button"
      data-music-toggle
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? labels.off : labels.on}
      title={playing ? labels.off : labels.on}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-current/10 ${className}`}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
    </button>
  );
}
