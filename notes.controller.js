const chalk = require('chalk')
const Note = require('./models/Note')

async function addNote(title, owner) {
    const note = await Note.create({ title, owner })

    console.log(chalk.bgGreen('Note was added!'))
    return note
}

async function getNotes() {
    return notes = await Note.find();
}

async function removeNote(id, owner) {
    const result = await Note.deleteOne({ _id: id, owner })

    if (result.matchedCount === 0) {
        throw new Error('No note to delete');
    }

    console.log(chalk.red(`Note with id="${id}" has been removed.`))
}

async function updateNote(noteData, owner) {
    const result = await Note.updateOne({ _id: noteData.id, owner }, { title: noteData.title })

    if (result.matchedCount === 0) {
        throw new Error('No note to edit');
    }

    console.log(chalk.bgGreen(`Note with id="${noteData.id}" has been updated!`))
}

module.exports = {
    addNote, getNotes, removeNote, updateNote
}
