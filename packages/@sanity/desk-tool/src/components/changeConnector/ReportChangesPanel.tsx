import React from 'react'
import {useReporter} from '@sanity/base/lib/change-indicators'

export function ReportChangesPanel(props: React.ComponentProps<'div'>) {
  const ref = React.useRef<HTMLDivElement>(null)
  useReporter('changesPanel', () => ({element: ref.current!}))
  return (
    <div ref={ref} className={props.className}>
      {props.children}
    </div>
  )
}
