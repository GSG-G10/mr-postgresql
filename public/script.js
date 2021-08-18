const getList = () => fetch("/get-todos").then(response => response.json())
    .then(response => response)

getList().then(result => {
    const container = document.getElementById('tasksToBeDone');
    result.forEach(element => {
        const pTag = document.createElement('p')
        pTag.innerText = element.description
        container.appendChild(pTag)
    })
    const body = document.getElementsByTagName("body")[0]
    body.appendChild(container)
});