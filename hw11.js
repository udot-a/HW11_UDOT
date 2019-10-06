// ************************* REQUIRED ******************************
function printImg(data) {
    elements = []
    Object.values(JSON.parse(data))[0].forEach((item, index) => {
        elements.push(required.appendChild(document.createElement('img')))
        elements[index].style.width = '50px;'
        elements[index].src = item['src']
        elements[index].title = item['title']
    });
}

readFile.onclick = (event) => {
    var request = new XMLHttpRequest
    request.open(
        "GET",
        './db.json'
    )

    request.onload = function (event) {
        this.status === 200 ?
            printImg(this.response) : console.warn('Something wrong with loading file!')
    }
    request.send()
}

// ******************* ADDITIONAL #2 *******************************************
// var messages = [
//     "backspace",
//     "enter",
//     "shift",
//     "control",
//     "delete",
//     "space",
//     "subtract",
//     "turn left",
//     "turn right",
//     "turn down",
//     "turn up"
// ]
// getKey = () => {
//     let counter = 1;
//     let key = new Date().toLocaleTimeString()
//     for (let i in log) i.split('[')[0] === key && counter++
//     return counter > 1 ? `${key}[${counter}]` : key
// }
// var log = {}
// var sendMessage = message => new Promise(
//     resolve => setTimeout(
//         () => resolve(message),
//         Math.random() * 7000
//     )
// )
// messages.forEach (
//     message => {sendMessage ( message)
//         .then( message =>  
//             Object.assign(log,{[getKey()]:message}))

//     }
// ) 
// var sendAll = () => {
//     var index = 0
//     function recursive() {
//         // debugger
//         let message = messages[index]
//         index++ < messages.length ?
//             sendMessage(message)
//                 .then(message => {
//                     Object.assign(log, { [getKey()]: message })
//                     recursive()
//                 }) : null


//     }
//     recursive()
// }

// sendAll()

