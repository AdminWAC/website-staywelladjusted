import { useEffect, useRef } from "react";
import { GHL_FORM_SCRIPT_SRC } from "@/config/workshops";

interface GhlFormEmbedProps {
  /** Raw iframe embed HTML coming from the workshop configuration. */
  embedHtml: string;
  className?: string;
}

/**
 * Renders the externally managed GHL form embed and loads the GHL activation
 * script once. Submissions are handled entirely by GHL — nothing is stored here.
 */
const GhlFormEmbed = ({ embedHtml, className }: GhlFormEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = embedHtml;

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${GHL_FORM_SCRIPT_SRC}"]`,
    );
    if (existing) {
      // Re-run activation for the newly injected iframe.
      existing.remove();
    }
    const script = document.createElement("script");
    script.src = GHL_FORM_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [embedHtml]);

  return <div ref={containerRef} className={className} />;
};

export default GhlFormEmbed;
