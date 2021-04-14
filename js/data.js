let users = [
    {user_id: 0, username: 'Tom Holland', img: '../images/user-avatar.jpg', last_seen: '10:53 AM'},
    {user_id: 1, username: 'Robert Downey', img: '../images/person1.jpg', last_seen: '11:45 PM'},
    {user_id: 2, username: 'Chris Evans', img: '../images/person2.jpg', last_seen: '07:32 AM'},
    {user_id: 3, username: 'Mark Ruffalo', img: '../images/person3.jpg', last_seen: '05:42 AM'},
    {user_id: 4, username: 'Elizabeth Olsen', img: '../images/person4.jpg', last_seen: '01:23 PM'},
    {user_id: 5, username: 'Benedict Cumberbatch', img: '../images/person5.jpg', last_seen: '11:05 PM'},
    {user_id: 6, username: 'Scarlet Johanson', img: '../images/person6.jpg', last_seen: '00:04 AM'}
]

let chats = [
    {chat_id: 1, sender_id: 0, receiver_id: 1, messages: [
        {message_id: 1, text : 'Hi Spiderman, How are you', time: '11:48 PM'}, 
        {message_id: 1, text : 'Are you Ok?', time: '11:48 PM'},
        {message_id: 0, text : 'Oh Mr Stark, I am great! and I am thinking about your gift', time: '11:50 PM'},
        {message_id: 1, text : 'Which one', time: '11:51 PM'},
        {message_id: 0, text : `New Spiderman's suit and it was full of new technologies`, time: '11:52 PM'},
        {message_id: 0, text : 'Thanks a lot', time: '11:52 PM'}
    ]},
    {chat_id: 2, sender_id: 0, receiver_id: 2, messages: [
        {message_id: 0, text: 'When are you coming home?', time: '07:33 AM'}, 
        {message_id: 2, text: `Couple of hours. I'm cashing in my predicure certificate`, time: '07:34 AM'},
        {message_id: 0, text: 'ok sounds good!', time: '07:34 AM'},
        {message_id: 2, text: 'It tickles and the chair is beating my back', time: '07:40 AM'},
        {message_id: 0, text: `Are you there now`, time: '07:40 AM'},
        {message_id: 2, text: 'Yea', time: '07:52 AM'},
        {message_id: 0, text: 'Oh ok', time: '07:52 AM'},
        {message_id: 2, text: 'My feet were gross', time: '07:55 AM'},
        {message_id: 2, text: 'Omg my feet are so pretty now!!!', time: '07:56 AM'},
    ]},
    {chat_id: 3, sender_id: 0, receiver_id: 3, messages: [
        {message_id: 3, text: 'Hey you are still planning to self publish?', time: '05:45 AM'}, 
        {message_id: 0, text: `Yeah, Why?`, time: '05:45 AM'},
        {message_id: 3, text: `Check out this cover designer, his samples are amazing, and his price is pretty reasonable, plus he's running a promotion right now - but it ends tonight, so hurry`, time: '05:48 AM'},
        {message_id: 3, text: 'www.bookcovers.creativinide.com', time: '05:49 AM'},
        {message_id: 3, text: `Oh yeah, and don't forget to bring some vodka for the girls tonight`, time: '05:52 AM'}
    ]},
    {chat_id: 4, sender_id: 0, receiver_id: 4, messages: [
        {message_id: 0, text: 'What time should I be at the center?', time: '01:26 PM'}, 
        {message_id: 4, text: `About 6ish - Kelly, Head LifeGuard`, time: '01:40 PM'},
        {message_id: 0, text: `Sounds good. Will someone be there to meet us?`, time: '01:55 PM'},
        {message_id: 4, text: `yes I'll make sure they're there`, time: '02:10 PM'}
    ]},
    {chat_id: 5, sender_id: 0, receiver_id: 5, messages: [
        {message_id: 0, text: 'Hello Doctor Strange, How can I help you', time: '11:10 PM'}, 
        {message_id: 5, text: `Hi Spiderman, I'm so sad. My football team never wins...`, time: '11:15 PM'}
    ]},
    {chat_id: 6, sender_id: 0, receiver_id: 6, messages: [
        {message_id: 6, text: 'What do you think of the internet?', time: '00:15 AM'}, 
        {message_id: 0, text: `From what I've experienced so far, I love it!`, time: '00:25 AM'},
        {message_id: 6, text: `Assuming my reputation precedes me. I enjoy spending my time in conversation on science, as well as a variety of topics.`, time: '00:28 AM'},
        {message_id: 6, text: `What do you like to discuss.`, time: '00:30 AM'},
        {message_id: 0, text: `Who you are favourite scientists?`, time: '00:35 AM'},
        {message_id: 6, text: `I admire anyone who's rebelling against the status quo in search of new frontiers.`, time: '00:40 AM'}
    ]}
]