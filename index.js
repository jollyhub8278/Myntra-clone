submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
    let key = "ema_live_rnZb2xpx5fA6HtsHLVH9glCfuRoFsPu7KpdkxgSA"
    let email = document.getElementById("username").value
    let url = `api.emailvalidation.io/v1/info?apikey=ema_live_rnZb2xpx5fA6HtsHLVH9glCfuRoFsPu7KpdkxgSA&email=support@emailvalidation.io`;
       let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    resultCont.innerHTML = str
})
