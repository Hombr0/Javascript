const fs = require("fs")
const util = require("util")

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

const p = Promise.all([read("1.txt", "utf8"), read("2.txt", "utf8"), read("3.txt", "utf8")])
p
.then((data) => {
	write("4.txt", data.join(" "))
})
.catch(err => {
	console.log(err)
})
