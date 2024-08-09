

async function login(formData) {
    const parsed = JSON.stringify(formData)
    const res = await fetch("http://localhost:8080/sparerigs-dev/login", {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: parsed
    })
    if(res.ok)
        return res.json()
    else 
        return false
}

export default login;