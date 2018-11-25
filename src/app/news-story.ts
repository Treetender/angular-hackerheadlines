export class NewsStory {

    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;

    constructor(
        id: number, author: string, title: string, datePublished: number, score?: number, type?: string, 
        url?: string, descendants?: number, relatedStoryIds?: number[]
    ) {
        this.id = id;
        this.by = author;
        this.title = title;
        this.time = datePublished;
        this.score = score;
        this.type = type;
        this.url = url;
        this.descendants = descendants;
        this.kids = relatedStoryIds;
    }
}
