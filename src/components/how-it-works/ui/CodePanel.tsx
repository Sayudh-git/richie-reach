'use client'

import { useState, useCallback, useMemo } from 'react'

/* Lightweight JSON syntax colorizer — replaces react-syntax-highlighter (~40KB) */

const COLORS = {
  key: '#7DD3FC',
  string: '#86EFAC',
  number: '#FCA5A5',
  bool: '#FCA5A5',
  punctuation: '#6B7280',
  base: '#A8A29E',
}

interface Token { text: string; color: string }

function tokenizeJsonLine(line: string): Token[] {
  const tokens: Token[] = []
  let lastIndex = 0
  const re = /("(?:\\.|[^"\\])*")\s*:|("(?:\\.|[^"\\])*")|(true|false|null)|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|([{}[\]:,])/g
  let m: RegExpExecArray | null
  while ((m = re.exec(line)) !== null) {
    if (m.index > lastIndex) tokens.push({ text: line.slice(lastIndex, m.index), color: COLORS.base })
    const [, key, str, lit, num, punct] = m
    if (key) tokens.push({ text: key + ':', color: COLORS.key })
    else if (str) tokens.push({ text: str, color: COLORS.string })
    else if (lit) tokens.push({ text: lit, color: COLORS.bool })
    else if (num) tokens.push({ text: num, color: COLORS.number })
    else if (punct) tokens.push({ text: punct, color: COLORS.punctuation })
    lastIndex = m.index + m[0].length
  }
  if (lastIndex < line.length) tokens.push({ text: line.slice(lastIndex), color: COLORS.base })
  return tokens
}

interface CodePanelProps {
  code: string
  language?: string
  label?: string
}

export default function CodePanel({ code, language = 'json', label }: CodePanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }, [code])

  const lines = code.split('\n')
  const tokenized = useMemo(
    () => language === 'json' ? lines.map(tokenizeJsonLine) : lines.map((l) => [{ text: l, color: COLORS.base }]),
    [code, language, lines],
  )
  const gw = lines.length > 99 ? '3.5rem' : '2.5rem'

  return (
    <div className="overflow-hidden rounded-md border border-border bg-[#0D0D0D]">
      {label && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <span className="font-mono text-[11px] text-muted-foreground">{label}</span>
          <div className="flex items-center gap-3">
            {language && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50">{language}</span>
            )}
            <button onClick={handleCopy} className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground" aria-label="Copy code">
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <pre className="py-4 font-mono text-[14px] leading-[1.65]" style={{ color: COLORS.base }}>
          <code>
            {tokenized.map((tks, i) => (
              <div key={i} className="flex">
                <span className="shrink-0 select-none pr-4 text-right" style={{ color: '#4B5563', width: gw, paddingLeft: '1rem' }}>{i + 1}</span>
                <span className="flex-1 pr-5">
                  {tks.map((t, j) => <span key={j} style={{ color: t.color }}>{t.text}</span>)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
