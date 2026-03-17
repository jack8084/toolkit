document.body.classList.toggle("dark")
const search = document.getElementById("search")
const tools = document.querySelectorAll(".tool")

search.addEventListener("input", () => {
    const term = search.value.toLowerCase()
    tools.forEach(tool => { const name = tool.innerText.toLowerCase() tool.style.display = name.includes(term) ? "flex" : "none" })
})


/* dark mode */

const toggle = document.getElementById("themeToggle")

toggle.onclick = () => {
    document.body.classList.toggle("dark")
}
