import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { snippets, snippetMatchesPath, type Snippet } from "@/config/scripts";

const ATTR = "data-snippet-id";

/** Parses raw HTML and returns live nodes (scripts recreated so they execute). */
function buildNodes(html: string, snippetId: string, slot: string): Node[] {
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  const nodes: Node[] = [];
  template.content.childNodes.forEach((node) => {
    if (node.nodeType === Node.COMMENT_NODE) return;

    if (node.nodeName === "SCRIPT") {
      const source = node as HTMLScriptElement;
      const script = document.createElement("script");
      Array.from(source.attributes).forEach((attr) =>
        script.setAttribute(attr.name, attr.value),
      );
      script.text = source.text;
      nodes.push(script);
      return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      nodes.push((node as Element).cloneNode(true));
    }
  });

  nodes.forEach((n) => {
    if (n.nodeType === Node.ELEMENT_NODE) {
      (n as Element).setAttribute(ATTR, `${snippetId}:${slot}`);
    }
  });

  return nodes;
}

function inject(snippet: Snippet) {
  const slots: Array<[string, string | undefined, "head" | "bodyStart" | "bodyEnd"]> = [
    ["head", snippet.head, "head"],
    ["bodyStart", snippet.bodyStart, "bodyStart"],
    ["bodyEnd", snippet.bodyEnd, "bodyEnd"],
  ];

  slots.forEach(([slot, html, target]) => {
    if (!html) return;
    if (document.querySelector(`[${ATTR}="${snippet.id}:${slot}"]`)) return;

    const nodes = buildNodes(html, snippet.id, slot);
    nodes.forEach((node) => {
      if (target === "head") document.head.appendChild(node);
      else if (target === "bodyStart") document.body.insertBefore(node, document.body.firstChild);
      else document.body.appendChild(node);
    });
  });
}

/**
 * Injects the snippets configured in `src/config/scripts.ts` according to
 * their scope (all pages / blog posts / specific pages).
 *
 * Snippets stay mounted once injected (third-party tags such as GTM are not
 * safe to remove and re-add on every navigation).
 */
const SnippetInjector = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    snippets.filter((s) => snippetMatchesPath(s, pathname)).forEach(inject);
  }, [pathname]);

  return null;
};

export default SnippetInjector;
