const btn_readTable = document.querySelector('#btn_readTable')
const p_readTable = document.querySelector('#p_readTable')

const btn_readSpecificTable = document.querySelector('#btn_readSpecificTable')
const input_readSpecificTable = document.querySelector('#input_readSpecificTable')
const p_readSpecificTable = document.querySelector('#p_readSpecificTable')

const btn_insert = document.querySelector('#btn_insert')
const input_insert = document.querySelector('#input_insert')

const btn_update = document.querySelector('#btn_update')
const input_update_id = document.querySelector('#input_update_id')
const input_update = document.querySelector('#input_update')

const btn_delete = document.querySelector('#btn_delete')
const input_delete = document.querySelector('#input_delete')

// READ ALL TABLE
btn_readTable.addEventListener("click", (err) => {
    fetch('http://localhost:3000/api_user/')
        .then((res) => {
            res.json().then((data) => {
                console.log(data)

                p_readTable.textContent = ""
                for (var i = 0; i < data.length; i++) {
                    p_readTable.append("[ " + "id : " + data[i].id + " user: " + data[i].user + "  ]  ")
                }
            })
        })


})

// READ SPECIFIC TABLE
btn_readSpecificTable.addEventListener("click", (err) => {
    const user = input_readSpecificTable.value

    fetch('http://localhost:3000/api_user/' + user, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((res) => {
            res.json().then((data) => {
                console.log(data)
                p_readSpecificTable.textContent = data[0].user
            })
        })
})

// INSERT RECORD
btn_insert.addEventListener("click", (err) => {
    const user = input_insert.value

    body = { "user": user }

    fetch('http://localhost:3000/api_user?user=' + user, {
        method: 'post',
        body: body,
        header: { 'Content-Type': 'application/json' }
    })
    .then((res) => {
        res.json().then((data) => {
            console.log(data)
        })
    })
})

// UPDATE RECORD
btn_update.addEventListener("click", (err) => {
    const id = input_update_id.value
    const user = input_update.value
    
    fetch('http://localhost:3000/api_user/?id=' + id + '&user=' + user + "/", {
        method: 'patch',
        header: { 'Content-Type': 'application/json' }
    })
    .then((res) => {
        res.json().then((data) => {
            console.log(data)
        })
    })
})


// DELETE RECORD
btn_delete.addEventListener("click", (err) => {
    const user = input_delete.value

    fetch('http://localhost:3000/api_user/' + user, {
        method: 'delete',
        header: { 'Content-Type': 'application/json' }
    })
    .then((res) => {
        res.json().then((data) => {
            console.log(data)
        })
    })
})