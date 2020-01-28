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
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in categorries" :key="item.id">
                                <td>{{ index + 1}}</td> 
                                <td>{{ item.name }}</td>
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
                categorries : {},
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
                    this.loadCategory()
            })
            .catch(()=>{
                console.log('Error....')
            })
            },
            loadCategory(){
                axios.get('api/category')
                    .then(response =>{
                        this.categorries = response.data.category
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        },
        created(){
             this.loadCategory()
        }
    }
</script>