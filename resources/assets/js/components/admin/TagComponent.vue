<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Tag </div>

                    <div class="card-body">
                       
                        <form action="" @submit.prevent="addNewTag" >
                         
                            <legend> Add New Tag</legend>   
                        <div class="form-group">
                            <label for="">Tag Name</label>
                            <input type="text" class="form-control" placeholder="Enter Tag Name" 
                            v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                        

                        <table class="table table-hover">
                        <thead>
                            <tr>
                                <th> ID</th>
                                <th> Tag</th>
                                <th> created </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in loadTag" :key="item.id">
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
            addNewTag(){
                this.form.post('api/tag')
            .then(response =>{
                Toast.fire({
                    icon: 'success',
                    title: 'Tag Added successfully'
                    })

                    this.$store.dispatch("allTagFromDatabase")
                    this.form.name = ''
            })
            .catch(()=>{
                console.log('Error....')
            })
            },
        },
        computed: {
            loadTag(){
            return this.$store.getters.getTagFormGetters
        }
        },
        mounted() {
            this.$store.dispatch("allTagFromDatabase")
        },
    }
</script>
