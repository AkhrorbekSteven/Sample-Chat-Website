let chatsList = document.querySelector('.chats-list')
let avatarName = document.querySelector('.username')
let userLastSeen = document.querySelector('.user-last-seen')
let avatarImage = document.querySelector('.avatar-image')
let chatMain = document.querySelector('.chat-main')
let textInput = document.querySelector('#textInput')
let sendButton = document.querySelector('#sendBtn')
let id
let DarkMode = document.querySelector('.dark-mode')

function chatsRenderer(array) {
    chatMain.innerHTML = null
    chatsList.innerHTML = null
    for (let i = 1; i < array.length; i++) {
        let chat = document.createElement('li')
        let img = document.createElement('img')
        let infoWrapper = document.createElement('div')
        let infoWrapperTop = document.createElement('div')
        let userName = document.createElement('h2')
        let time = document.createElement('time')
        let lastMessage = document.createElement('p')

        chat.classList.add('chat')
        infoWrapper.classList.add('info-wrapper')
        infoWrapperTop.classList.add('info-wrapper-top')
        userName.classList.add('username')
        lastMessage.classList.add('last-msg')

        img.src = array[i].img
        userName.innerText = array[i].username
        time.innerText = array[i].last_seen
        lastMessage.innerText = `Hi what's up`

        infoWrapperTop.appendChild(userName)
        infoWrapperTop.appendChild(time)
        infoWrapper.appendChild(infoWrapperTop)
        infoWrapper.appendChild(lastMessage)
        chat.appendChild(img)
        chat.appendChild(infoWrapper)

        chatsList.appendChild(chat)

        chat.addEventListener('click', () => {
            id = array[i].user_id - 1
            chatMain.classList.remove('inactive')
            for (let i = 0; i < chatsList.childNodes.length; i++) {
                chatsList.childNodes[i].classList.remove('active')
            }
            chat.classList.add('active')
            avatarName.innerText = userName.innerText
            userLastSeen.innerText = time.innerText
            avatarImage.src = img.src
            MessagesRenderer(chats[id].messages, chats[id].receiver_id, chats[id].sender_id)
        })
    }
}
chatsRenderer(users)

function MessagesRenderer(array, recevier_id, sender_id) {
    chatMain.innerHTML = null
    for (let element of array) {
        let messageWrapper = document.createElement('div')
        let messageAuthor = document.createElement('div')
        let img = document.createElement('img')
        let infoWrapper = document.createElement('div')
        let h2 = document.createElement('h2')
        let i = document.createElement('i')
        let messageText = document.createElement('div')
        let p = document.createElement('p')

        messageWrapper.classList.add('msg-wrapper')
        messageAuthor.classList.add('msg-author')
        infoWrapper.classList.add('info-wrapper')
        h2.classList.add('username')
        messageText.classList.add('msg-text')

        let found 
        if (element.message_id == sender_id) {
            messageWrapper.classList.add('msg-send')
            found = users[sender_id]
            img.src = found.img
            h2.innerText = found.username
        } 
        if (element.message_id == recevier_id) {
            messageWrapper.classList.add('msg-recieved')
            found = users[recevier_id]
            img.src = found.img
            h2.innerText = found.username
        }
        i.innerText = element.time
        p.innerText = element.text
        
        messageText.appendChild(p)
        infoWrapper.appendChild(h2)
        infoWrapper.appendChild(i)
        messageAuthor.appendChild(img)
        messageAuthor.appendChild(infoWrapper)
        messageWrapper.append(messageAuthor)
        messageWrapper.append(messageText)

        chatMain.appendChild(messageWrapper)
    }
}

sendButton.addEventListener('click', () => {
    let date = new Date()
    let currentTime
    if (Number(date.getHours()) < 12) {
        currentTime = date.getHours() + ':' + ((date.getMinutes() < 10) ? ('0' + date.getMinutes()) : date.getMinutes())
        currentTime += ' AM'
    } else {
        currentTime = date.getHours() - 12 + ':' + ((date.getMinutes() < 10) ? ('0' + date.getMinutes()) : date.getMinutes())
        currentTime += ' PM'
    }
    console.log(currentTime);
    if (avatarName.innerText != 'Select a chat to read messages') {
        if (textInput.value != '') {
            let newMessage = {
                message_id: 0,
                text: textInput.value,
                time: currentTime
            }
            chats[id].messages.push(newMessage)
            MessagesRenderer(chats[id].messages, chats[id].receiver_id, chats[id].sender_id)
        } else {
            alert('please type smth')
        }
        textInput.value = null
    } else {
        alert('please select a chat!!!')
    }
})