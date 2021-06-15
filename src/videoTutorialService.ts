import { VideoTutorial, VideoTutorialSearchResult } from "../db/interfaces";
const data = require('../db/videoTutorials.json')


export function searchForTutorials(searchTerm: string): VideoTutorialSearchResult[] {
  const result: VideoTutorialSearchResult[] = []
  const lowerCaseSearchTermArray = searchTerm.toLowerCase().split(/\W+/)

  data.forEach((tutorial: VideoTutorial) => {
    let matchCount = 0
    const lowerCaseTutorialSummaryArray = tutorial.summary.toLowerCase().split(/\W+/)
      .concat(tutorial.tags)

    lowerCaseTutorialSummaryArray.forEach((word: string) => {
      if (lowerCaseSearchTermArray.includes(word)) {
        matchCount++
      }
    })
    
    if (matchCount) result.push({ matchCount, ...tutorial })
  })

  return result.sort( compare );
}

function compare( a:{ matchCount: number }, b:{ matchCount: number } ) {
  return b.matchCount - a.matchCount
}
