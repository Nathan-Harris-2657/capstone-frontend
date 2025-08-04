function ArticlesPage(){
    const semiTrailerArticles = [
  {
    title: "Why Are Semi-Trucks Also Called Tractor Trailers?",
    url: "https://www.msn.com/en-us/autos/news/why-are-semi-trucks-also-called-tractor-trailers/ar-AA1JrUti",
    summary: "Explores the origin of the term 'tractor trailer' and how the modular design of semi-trucks evolved to support diverse cargo needs."
  },
  {
    title: "Why Renting a Semi Trailer Might Be Smarter Than Buying",
    url: "https://southfloridareporter.com/why-renting-a-semi-trailer-might-be-smarter-than-buying/",
    summary: "Breaks down the financial and operational advantages of renting trailers, especially for small fleets and owner-operators."
  },
  {
    title: "20 Types of Semi-Trailers: A Comprehensive Guide",
    url: "https://www.freightcourse.com/semi-trailer-types/",
    summary: "Detailed overview of trailer types like dry vans, flatbeds, and intermodal chassis, with specs and use cases for each."
  },
  {
    title: "Trailers 101 - A Free Guide on Semi-Trailers",
    url: "https://www.ttnews.com/articles/trailers-101-free-guide-semi-trailers",
    summary: "A beginner-friendly guide covering trailer types, maintenance tips, and leasing strategies for fleet managers."
  },
  {
    title: "Semi-trailer - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Semi-trailer",
    summary: "Comprehensive encyclopedia entry on semi-trailers, their history, configurations, and global terminology."
  }
];


    return(
        <>
        <div id="articleContainer">
            <div id="article">{semiTrailerArticles.map((article, index) =>(
                <div key={index}>
                    <div id="articleTitle">{article.title}</div>
                    <div id="summaryUrlContainer">
                        <div id="articleSummary">{article.summary}...</div>
                        <a id="readMoreArticle" href={article.url}> Read More</a>
                    </div>
                    
                </div>
            )
            
            )}</div>
        </div>
        </>
    )
}
export default ArticlesPage