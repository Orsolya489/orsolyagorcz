The hero GIF: the prototype running the Medical conversation ("Migraine, pharmacy closed").
Needs the portfolio-2026 preview server on :4321.

  node record.js 0 1 frames          # real-time capture of the phone, then taps the last Reliability row
  STILL=still.png node encode.js frames flow.gif 80 4000 4500 1
  node sheet.js flow.gif sheet.png 12 6   # contact sheet, decoded by Chrome, to check it

Copy flow.gif -> public/signal/reliability-signal-flow.gif
     still.png -> public/signal/reliability-signal-flow-still.png (shown while motion is off)
