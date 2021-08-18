const getList = () => fetch("/get-todos").then(response => response.json())
    .then(response => response)

const deleteTodo = (id) => fetch(`/delete-todo/${id}`, {
    method: "delete"
})

getList().then(result => {
    const container = document.getElementById('tasksToBeDone');
    result.forEach(element => {
        const pTag = document.createElement('p')
        pTag.innerText = element.description
        pTag.onclick = (e) => {
            deleteTodo(element.id)
            container.removeChild(pTag)
        }
        container.appendChild(pTag)
    })
    const body = document.getElementsByTagName("body")[0]
    body.appendChild(container)
});