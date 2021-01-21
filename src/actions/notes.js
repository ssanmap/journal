import { db } from "../firebase/firebase-config";

// tarea asincrona necesita callback
export const startNewNote = () => {
    return async (dispatch, getState) => {

            const uid = getState().auth.uid;
            console.log(uid)

            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime()
            }

            const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
            .then(function(doc) {
                console.log("Document written with ID: ", doc.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            console.log(doc)
    }
}