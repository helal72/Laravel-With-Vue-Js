<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Category </div>

                    <div class="card-body">
                       
                        <form action="" @submit.prevent="addNewCategory" >
                         
                            <legend> Add New Category</legend>   
                        <div class="form-group">
                            <label for="">Category Name</label>
                            <input type="text" class="form-control" placeholder="Enter Category Name" 
                            v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                     

                        <table class="table table-hover">
                        <thead>
                            <tr>
                                <th> ID</th>
                                <th> Category</th>
                                <th> created </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in loadCategory" :key="item.id">
                                <td>{{ index + 1}}</td> 
                                <td>{{ item.name }}</td>
                                <td>{{ item.created_at | formatDate}}</td>
                                <td>
                                     <a href="" class="fa fa-edit"></a> | <a href="" class="fa fa-trash"></a>
                                </td>
                            </tr>
                        </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
               
               form: new Form({
                    name: '',
                })
            }
        },
        methods: {
            addNewCategory(){
                this.form.post('api/category')
            .then(response =>{
                Toast.fire({
                    icon: 'success',
                    title: 'Category Added successfully'
                    })

                    this.$store.dispatch("allCategoryFromDatabase")
                    this.form.name = ''
            })
            .catch(()=>{
                console.log('Error....')
            })
            },
        },
        computed: {
            loadCategory(){
            return this.$store.getters.getCategoryFormGetters
        }
        },
        mounted() {
            this.$store.dispatch("allCategoryFromDatabase")
        },
    }
</script>