'use client'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import plaintext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext'

SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('plaintext', plaintext)

const customStyle = {
  background: '#0D0D0D',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '6px',
  padding: '0',
  margin: '0',
  fontSize: '14px',
  lineHeight: '1.6',
  fontFamily: 'var(--font-mono)',
}

const codeStyle: Record<string, React.CSSProperties> = {
  hljs: { background: 'transparent', color: '#A8A29E', padding: '16px 20px 16px 24px', lineHeight: '1.65', display: 'block', overflowX: 'auto' },
  'hljs-attr': { color: '#7DD3FC' },
  'hljs-string': { color: '#86EFAC' },
  'hljs-number': { color: '#FCA5A5' },
  'hljs-literal': { color: '#FCA5A5' },
  'hljs-punctuation': { color: '#6B7280' },
  'hljs-comment': { color: '#4B5563', fontStyle: 'italic' },
}

interface CodePanelProps {
  code: string
  language?: string
  label?: string
}

export default function CodePanel({ code, language = 'json', label }: CodePanelProps) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-[#0D0D0D]">
      {label && (
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#991B1B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#92400E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2DD4BF]" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">{label}</span>
        </div>
      )}
      <SyntaxHighlighter language={language} style={codeStyle} customStyle={customStyle}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
