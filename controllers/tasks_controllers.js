import { fileURLToPath } from 'url'
import lodash from 'lodash'
import { JSONFile, LowSync } from 'lowdb'
import { join, dirname } from 'path'
import { v4 as uuidv4 } from 'uuid'
import Users from '../Models/User.js'

const appDir = process.env.PWD;
const file = join(`${appDir}/db`, "db.json");
const db = new LowSync(new JSONFile(file));
db.data ||= { tasks: [] };

export function postTasks(req, res) {
    let title = req.body.title;
    // Generate a new random ID
    let id = uuidv4();
    // Reject any requests without the body
    if (!title || title === undefined) {
        res.status(400).end()
    }
    else {
        // Add the new entry along an id to the db file
        db.data.tasks.push({ id, title });
        db.write();
        return res.status(201).end();;
    }
}

export function getAllTasks(req, res) {
    console.log(Users.findById());
    Users.findById();
    return res.json(db.data.tasks);
}

export function getSpecificTasks() {
    var id = req.params.id;
    // Capture the id from the request and first check if it exists in the db
    db.chain = lodash.chain(db.data)
    const task = db.chain
        .get('tasks')
        .find({ id: id })
        .value()
    if (task) {
        return res.json(task);
    }
    return res.status(404).end();
}

export function deleteTasks() {
    db.chain = lodash.chain(db.data)
    db.chain
        .get('tasks')
        .remove({ id: req.params.id })
    return res.status(200).end();
}

export function uptadeTasks() {
    var update = req.body.title;
    // Reject any requests without a body
    if (!update || update === undefined) {
        res.status(400).end()
    }
    else {
        // Find the item in the db with that id and write the update to it
        db.chain = lodash.chain(db.data)
            .get('tasks')
            .find({ id: req.params.id })
            .assign({ title: update })
            .value()
        return res.status(200).end();
    }
}

export async function createUsers(req, res) {
    try {
        const { name, password, email } = req.body
console.log(name,password,email)
        const newUser = await Users.create({
            name: name,
            password: password,
            email: email
        })
        if (newUser) res.status(200).json({
            message:"utilisateur créer"
        });
    } catch (error) {
        console.log(error)
    }
}
