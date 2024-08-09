async function getArticles() {
    const res = await fetch("http://localhost:8080/sparerigs-dev/items/list", {
      method: "POST",
      mode: 'cors',
  
    })
    return res.json()
  }

  export default getArticles;