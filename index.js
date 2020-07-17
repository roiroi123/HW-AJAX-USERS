async function init() {
    try {
        const result = await getAPI({url : "https://gorest.co.in/public-api/users?_format=json&access-token=bDYGMb_YwoETOXvHQdnA_-RuiNfd0t0NpcMR"})
        const renderedResult = result.result
        DrawRenderAPI(renderedResult)
    } catch (error) {
        console.log(error);
    }
}
init()

function DrawRenderAPI(APIResult) {
    console.log(APIResult);
    const tbody = $("#tbody")
    APIResult.forEach(user => {
        console.log(user);
        const tr = $("<tr></tr>")
        const tdId = $(`<td>${user.id}</td>`)
        const tdFName = $(`<td>${user.first_name}</td>`)
        const tdLName = $(`<td>${user.last_name}</td>`)
        const tdGender = $(`<td>${user.gender}</td>`)
        const tdDateOfBirth = $(`<td>${user.dob}</td>`)
        const tdEmail = $(`<td>${user.email}</td>`)
        const tdstatus = $(`<td>${user.status}</td>`)
        tr.append(tdId,tdFName,tdLName,tdGender,tdDateOfBirth,tdEmail,tdstatus)
        tbody.append(tr)
        
    });

    
}