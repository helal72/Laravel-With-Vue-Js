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
            .then(function(response){
                Toast.fire({
                    icon: 'success',
                    title: 'Category Added successfully'
                    })
            })
            .catch(()=>{
                console.log('Error....')
            })
            }
        }
    }
</script>