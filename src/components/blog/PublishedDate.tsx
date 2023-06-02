import React from 'react'

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function PublishedDate({date, text=undefined}) {
  const d = new Date(date)
  return (
    <div className="font-mono text-white/20 text-xs py-2 flex justify-end">{text}{text && ":"} {d.toLocaleDateString(undefined, options as any)}</div>
  )
}
