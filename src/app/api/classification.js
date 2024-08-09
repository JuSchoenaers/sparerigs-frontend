async function getClassificationTree(){
    const res = await fetch("http://localhost:8080/sparerigs-dev/classification/tree", {
        method: "GET",
        mode: 'cors',
      })
      return res.json()

}

export default getClassificationTree;