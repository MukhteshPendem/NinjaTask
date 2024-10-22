

const UpdateService = async(id,data) => {

   try {
       const response = await fetch(`http://localhost:8083/api/tasks/${id}`, {
           method: "PUT",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({completed: true})
       })
       const json = await response.json();
       console.log("api response ----------", json)

       if (response.ok) {
           return await json;
       }
   }
   catch (error) {
       console.error("Error fetching tasks:", error);
   }

}

export default UpdateService;