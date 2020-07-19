async function init() {
    try {
        // i registered to the API website and got a constant token -_-
        const result = await getAPI({url : "https://gorest.co.in/public-api/users?_format=json&access-token=TCCLGqkQi-iO6ptX2j-ZfvNvLqvGE7p7R9xC"})
        const renderedResult = result.result//the path
        DrawRenderdAPI(renderedResult)
    } catch (error) {
        console.log(error);
    }
}
init()



function DrawRenderdAPI(APIResult) {
    const tbody = $("#tbody")
    APIResult.forEach(user => {
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
