import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class QuillTransformerService {

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Convert a Quill Delta ops array into SafeHtml with Tailwind CSS.
   */
  convert(delta: { ops: any[] }): SafeHtml {
    const html = this.buildHtml(delta.ops);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private buildHtml(ops: any[]): string {
    let html = '';
    let lineText = '';
    let lineAttrs: any = {};
    let listStack: string[] = [];

    const flush = () => {
        if (!lineText.trim()) return; // Skip if lineText is empty or whitespace

        // Handle lists
        if (lineAttrs.list) {
            const listType = lineAttrs.list === 'ordered' ? 'ol' : 'ul';
            if (!listStack.includes(listType)) {
                html += `<${listType} class="list-${lineAttrs.list === 'ordered' ? 'decimal' : 'disc'} pl-8">`;
                listStack.push(listType);
            }
            if (lineAttrs.list === 'bullet') {
                html += `
                    <li class="flex items-center group hover:bg-gray-100 p-2 rounded transition-colors">
                        <span class="mr-3 text-blue-500 transition-transform transform group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 2v14h12V5H6zm2 2h8v2H8V7zm0 4h8v2H8v-2z" />
                            </svg>
                        </span>
                        <span>${lineText}</span>
                    </li>`;
            } else {
                html += `<li>${lineText}</li>`;
            }
        } else {
            // Close any open lists
            while (listStack.length) {
                const listType = listStack.pop();
                html += `</${listType}>`;
            }

            // Handle alignment
            const alignmentClass = lineAttrs.align
                ? lineAttrs.align === 'justify'
                    ? 'text-justify'
                    : `text-${lineAttrs.align}`
                : '';

            // Handle indentation
            const indentLevel = lineAttrs.indent || 0; // Default to 0 if no indent is specified
            const indentClass = indentLevel > 0 ? `pl-${indentLevel * 4}` : '';

            // Handle direction (RTL or LTR)
            const directionAttr = lineAttrs.direction === 'rtl' ? 'dir="rtl"' : '';
            const directionClass = lineAttrs.direction === 'rtl' ? 'text-right' : '';

            // Handle headers
            if (lineAttrs.header) {
                const sizeMap: Record<number, string> = {
                    1: 'text-4xl font-bold',
                    2: 'text-3xl font-bold',
                    3: 'text-2xl font-semibold',
                    4: 'text-xl font-semibold',
                    5: 'text-lg font-medium',
                    6: 'text-base font-medium',
                };
                html += `<h${lineAttrs.header} class="${sizeMap[lineAttrs.header]} my-4 ${alignmentClass} ${indentClass} ${directionClass}" ${directionAttr}>${lineText}</h${lineAttrs.header}>`;
            } 
            // Handle code blocks
            else if (lineAttrs['code-block']) {
                const language = lineAttrs['code-block'] || 'plain';
                const uniqueId = `copy-btn-${Math.random().toString(36).substr(2, 9)}`; // Generate a unique ID for the button
                html += `
                    <div class="relative bg-black text-white rounded-lg p-4 my-4 ${indentClass} ${directionClass}" ${directionAttr}>
                        <div class="absolute top-2 right-2 flex items-center space-x-2">
                            <span class="text-xs font-mono bg-gray-800 text-gray-300 px-2 py-1 rounded">${language}</span>
                            <button id="${uniqueId}" class="text-gray-400 hover:text-white cursor-pointer relative group" onclick="navigator.clipboard.writeText(\`${lineText}\`)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </div>
                        <pre class="overflow-x-auto"><code>${lineText}</code></pre>
                    </div>`;
            } 
            // Handle RTL text
            else if (lineAttrs.direction === 'rtl') {
                html += `<p dir="rtl" class="text-right ${alignmentClass} ${indentClass}">${lineText}</p>`;
            } 
            // Fallback to paragraph
            else {
                html += `<p class="mb-4 ${alignmentClass} ${indentClass} ${directionClass}" ${directionAttr}>${lineText}</p>`;
            }
        }

        lineText = ''; // Reset lineText after flushing
        lineAttrs = {}; // Reset lineAttrs after flushing
    };

    for (const op of ops) {
        const txt = op.insert as string;
        const attrs = op.attributes || {};

        // Handle bare newlines
        if (txt === '\n' && Object.keys(attrs).length === 0) {
            flush();
            html += '<br/>';
            continue;
        }

        // Handle blocks with newlines
        if (typeof txt === 'string' && txt.includes('\n')) {
            const parts = txt.split('\n');
            for (let i = 0; i < parts.length; i++) {
                lineText += this.wrapInline(parts[i], attrs);
                if (i < parts.length - 1) {
                    lineAttrs = attrs;
                    flush();
                }
            }
        } else {
            // Accumulate inline text
            lineText += this.wrapInline(txt, attrs);
        }
    }

    // Flush remaining content
    flush();
    // Close any remaining lists
    while (listStack.length) {
        const listType = listStack.pop();
        html += `</${listType}>`;
    }

    return html;
  }

  /** Wrap inline attributes (bold, italic, underline, color, link, etc.) */
  private wrapInline(text: string, attrs: any): string {
    const isCodeBlock = !!attrs['code-block'];
    let t = this.escapeHtml(text, isCodeBlock);

    if (attrs.link) {
        t = `<a href="${attrs.link}" target="_blank" class="text-blue-600 hover:underline">${t}</a>`;
    }
    if (attrs.color || attrs.background) {
        const style = [
            attrs.color ? `color: ${attrs.color}` : '',
            attrs.background ? `background-color: ${attrs.background}` : ''
        ].filter(s => s).join(';');
        t = `<span style="${style}">${t}</span>`;
    }
    if (attrs.bold) {
        t = `<strong>${t}</strong>`;
    }
    if (attrs.italic) {
        t = `<em>${t}</em>`;
    }
    if (attrs.underline) {
        t = `<u>${t}</u>`;
    }
    if (attrs.strike) {
        t = `<s>${t}</s>`;
    }
    if (attrs.size) {
        const sizeMap: Record<string, string> = {
            small: 'text-sm',
            large: 'text-lg',
            huge: 'text-xl'
        };
        t = `<span class="${sizeMap[attrs.size] || ''}">${t}</span>`;
    }
    if (attrs.font) {
        const fontMap: Record<string, string> = {
            serif: 'font-serif',
            monospace: 'font-mono'
        };
        t = `<span class="${fontMap[attrs.font] || ''}">${t}</span>`;
    }
    if (attrs.script === 'sub') {
        t = `<sub>${t}</sub>`;
    }
    if (attrs.script === 'super') {
        t = `<sup>${t}</sup>`;
    }

    // Remove handling of `indent` here, as it should only apply to block-level elements.

    return t;
  }

  /** Simple HTML escape */
  private escapeHtml(text: string, isCodeBlock: boolean = false): string {
    if (isCodeBlock) {
      return text; // Return raw text for code blocks
    }
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
}
