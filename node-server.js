const http = require("http")
const url = require("url")
const fs = require("fs")
const PORT = 3007

http.createServer((req,res) => {
    const fullpath =url.parse(req.url, true);
   

res.writeHead(200, "The port is Working great!",{'Content-type': 'text/html'})
if (fullpath.path ==="/") {
     res.write("<h1>Node-Sever </h1>")
     res.write("<a href='/'>Home</a>")
     res.write("<a href='/aboutme&name=bushra'>Aboutme</a>")
     res.write("<a href='/myfamilyname=myfamily'>Myfamily</a>")
     res.write("<h2>Welcome to my web pages!</h2>")
     res.write("<div>Explore the site")
     res.write("<p>click on the links for futher information</p></div>")

} else if (fullpath.path.includes("aboutme")) {
    res.write("<h1> About Me </h1>")
    res.write("<a href='/'>Home</a>")
    res.write("<a href='/aboutme&name=bushra'>Aboutme</a>")
    res.write("<a href='/myfamilyname=myfamily'>MYfamily</a>")
    res.write("<h3>Welcome to My Digital World!</h3>")
    res.write("<p>Discover journey of Bushra Rauf, an MBA graduate turned passinate web develop, commited to creating innovative digital solutions")
    res.write("<h4>You do want to read more about me click on links</h4>")
    res.write("<a href='./aboutme?name=personal'>Personal-info</a>")
    res.write("<a href='./aboutme?name=contact'>Contact-No</a>")


    let queries = fullpath.query;

    if (queries.name === "personal") {
        fs.readFile('./data/personal.html', (err, data) => {
            if (err) {
                res.write("<p>Something is going wrong!</p>")
            } else {
                res.write(data);
            }
        })
     } 

        
    if (queries.name === "contact") { // ?name=contact
        res.write('<h2>My Contact details</h2>')
        res.write("<h4>Confidential Data</h4>")
        fs.readFile('./data/contact.txt',(err, data) => {
            if (err){
                res.write("<p>Oops!</p>")
            } else {
            res.write(`<div>${data}</div>`)
            }
        })
    
    }

} else if (fullpath.path.includes("myfamily")) {
    res.write("<h1>My Family</h1>")
    res.write("<a href='./'>Home</a>")
    res.write("<a href='./aboutme&name=bushra'>AboutMe</a>")
    res.write("<a href='./myfamilyname=myfamily'>MyFamily</a>")
    res.write("<h2> My Sweet family!</h2>")
    res.write("<p>My deepest love, and my truest self. They are my heart, my home, and my forever.</p>")
    res.write("<h3> My World</h3>")
    res.write("<div>Family: where life begins and love never ends")
    res.write("<p>Family gives us the strength to carry on, the wisdom to grow, and the love to thrive.</p>")
    res.write("<p>That's beautiful! Family truly is everything and having them as your world brings so much joy and fulfillment. Every shared moment, every laugh, every challenge faced together strengthens the bond that keeps us close.")
    res.write("<p>With every shared laugh and tear, they remind us that we are never alone</div>")
    res.write("<h3> Life is Good!")
}

// fs.readFile('./data/footer.html',(err,data) => {
//         if (err) {
//             console.log('Oops! check your code ')
//         } else {
//             res.write(data)
//         }
        
//   })
     
}) .listen(PORT, ()=> console.log(`connecting on port ${PORT}`))

const readFile = async (fileName) => {
    let data = await read(fileName);
}

  
