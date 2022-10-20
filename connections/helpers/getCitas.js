const API="https://eb01ea60-40b3-4e4f-91e7-e536b04d2af8.mock.pstmn.io"
// const API="https://rickandmortyapi.com/api/character"


export default async (id)=>{

    const apiUrl=(id) ? `${API}${id}` : API

    try{

        const response=await fetch(apiUrl)
        const data=await response.json()

        return data

    }catch(error){
        console.log("Error Fetch",error)
    }
}