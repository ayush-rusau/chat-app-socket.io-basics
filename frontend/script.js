

let socket = io();
socket.on('connection', () => {
    console.log("connected" + socket.id)
})

$(function() {
    let msglist = $('#msglist')
    let sendbtn = $("#sendmsg")
    let msgbox = $("#msgbox")
    let loginbox= $('#loginbox')
    let loginbtn = $('#loginbtn')
    let loginDiv = $('#login-div')
    let chatDiv = $('#chat-div')

    let user = ''

    sendbtn.click(function () {
        user: user,
        socket.emit('send_msg', {message: msgbox.val()})
    })
    
    loginbtn.click(function() {
        user = loginbox.val()
        //console.log(user);
        chatDiv.show()
        loginDiv.hide()
    })

    socket.on('recv_msg', function(data){
        console.log(data)
        console.log(data.user)
        msglist.append($('<li>' + data.user + ':' + data.message + '</li>'))
    })

})