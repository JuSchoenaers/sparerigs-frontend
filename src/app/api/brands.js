async function getBrands(){
    const res = await fetch("http://localhost:8080/sparerigs-dev/brand/list", {
        method: "GET",
        mode: 'cors',
      })
      return res.json()

}

export default getBrands;