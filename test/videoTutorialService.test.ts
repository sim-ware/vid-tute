import { searchForTutorials } from "../src/videoTutorialService";


describe("test searchForTutorials()", () => {
  it("should return a single tutorial matching user's search term", () => {
    const searchResult = searchForTutorials('Moon Rocket')
    expect(searchResult[0]).toStrictEqual(
      {
        "id": "04",
        "tags": [
          "reading",
          "literacy",
          "spelling",
          "space",
          "cartoon"
        ],
        "link": "www.videotutorials.io/04",
        "title": "Spelling in Space",
        "summary": "A fun series that teaches spelling skills with exciting objects from space, such as the moon and a rocket.",
        "matchCount": 2
      }
    );
  });

  it("should return a collection of tutorials matching user's search term", () => {
    const searchResult = searchForTutorials('Creativity')
    expect(searchResult).toStrictEqual(
      [{
        "id": "06",
        "link": "www.videotutorials.io/06",
        "matchCount": 1,
        "title": "Music Time",
        "summary": "An all-time classic sing-along series that gives children a first sense of the miracle of music.",
        "tags": ["music", "singing", "creativity"]
      },
      {
        "id": "09",
        "link": "www.videotutorials.io/09",
        "matchCount": 1,
        "title": "LEGO - Build and Believe",
        "summary": "A partership with LEGO sees this series teach the joy of building.",
        "tags": ["creativity"]
      }]
    );
  });

  it("should return a collection of tutorials matching user's search term, sorted in order of matchCount", () => {
    const searchResult = searchForTutorials('Maths Magic')
    expect(searchResult[0]).toStrictEqual(
      { 
        "id": "05",
        "link": "www.videotutorials.io/05",
        "matchCount": 4,
        "summary": "A new series that sets up the foundation for an education in magic, through the relatable medium of maths.",
        "tags": ["magic", "maths"], 
        "title": "Maths Magic" 
      }
    );
    expect(searchResult[1]).toStrictEqual(
      { 
        "id": "01",
        "link": "www.videotutorials.io/01",
        "matchCount": 1,
        "summary": "A fun series where addition is taught using colourful cartoon animals.",
        "tags": ["maths", "animals", "cartoon"],
        "title": "Addition and Animals" 
      }
    );
  });
});