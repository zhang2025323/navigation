export function parseLyrics(lrcText) {
  if (!lrcText || typeof lrcText !== 'string') return []
  
  const lines = lrcText.trim().split('\n')
  const result = []
  
  for (const line of lines) {
    const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/)
    if (match) {
      const minutes = parseInt(match[1])
      const seconds = parseInt(match[2])
      const milliseconds = parseInt(match[3].padEnd(3, '0'))
      const time = minutes * 60 + seconds + milliseconds / 1000
      const text = match[4].trim()
      
      if (text) {
        result.push({ time, text })
      }
    }
  }
  
  return result.sort((a, b) => a.time - b.time)
}

export function findCurrentLyricIndex(parsedLyrics, currentTime) {
  if (!parsedLyrics || parsedLyrics.length === 0) return -1
  
  for (let i = parsedLyrics.length - 1; i >= 0; i--) {
    if (currentTime >= parsedLyrics[i].time) {
      return i
    }
  }
  
  return -1
}

export function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '00:00'
  
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
