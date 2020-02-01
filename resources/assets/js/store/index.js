export default {

	state: {  
    category: [],
    tag: []
	},

	getters: {

      getCategoryFormGetters(state){ //take parameter state

          return state.category
       },
       getTagFormGetters(state){ //take parameter state

         return state.tag
      }
     
	},

	actions: {
       allCategoryFromDatabase(context){

          axios.get("api/category")

               .then((response)=>{

                  console.log(response.data.category)

                  context.commit("categories",response.data.category) //categories will be run from mutation

               })

               .catch(()=>{
                  
                  console.log("Error........")
                  
               })
       },
       allTagFromDatabase(context){

         axios.get("api/tag")

              .then((response)=>{

                 console.log(response.data.tag)

                 context.commit("tags",response.data.tag) //categories will be run from mutation

              })

              .catch(()=>{
                 
                 console.log("Error........")
                 
              })
      }
	},

	mutations: {
    
    categories(state,data) {
      
          return state.category = data
      },
      tags(state,data) {
      
         return state.tag = data
      }

	}
}
