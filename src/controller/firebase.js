
export const getCarta = () => {
    return firebase.firestore().collection("Productos").get()
    .then(() => {
            console.log("Almuerzo y cena");   
        })
    }      
