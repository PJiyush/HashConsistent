import {HashConsistent, node } from "./consitent_hash/HashConsistent.js";

const Hash = new HashConsistent()
const servers = ['server1 (connection string 1)','server2 (connection string 1)','server3 (connection string 1)'] 
servers.forEach(server=>{
    Hash.addNode(new node(server,Math.floor(Math.random()*100)))
})
Hash.print()
export {Hash}