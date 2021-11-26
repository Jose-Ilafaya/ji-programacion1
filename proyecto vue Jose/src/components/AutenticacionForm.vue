<template>
<div class="container mt-3">

    <div class="row justify-content-md-center ">

        <div class="col-md-auto card p-2">
            <h4>Ingreso al sistema</h4>
            <div class="mb-3 mt-4">
                <label class="form-label">Correo</label>
                <input v-model="correo" placeholder="Ingrese correo" class="form-control" type="email">
            </div>

            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input v-model="password" placeholder="Ingrese contraseña" class="form-control" type="password">
            </div>
            <button v-if="user?.email==null" @click="login()" class="btn btn-primary mb-3">Ingresar</button>
            <button @click="registrar()" class="btn btn-primary">Registrar</button>
        </div>
    </div>
</div>
</template>
<script>
import  {auth} from '@/utils/firebase.js'
import  {signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
export default {
    name:'AutenticacionForm',
    data(){
        return{
            correo:'',
            password:'',
            user:null
        }
    },
    methods:{
            
        async registrar(){
            try{
                await createUserWithEmailAndPassword(auth,this.correo,this.password)
                this.vaciar();

            } catch(error){
                alert(error)
            }


        },
        usuarioLogueado(){
            onAuthStateChanged(auth,(user)=>{
                this.user = user;
            })
        },
        async login(){
            try{
                await signInWithEmailAndPassword(auth,this.correo,this.password)
                this.vaciar()
                this.$router.push('catalogoadmin')
               
            } catch (error){
                alert(error)
            }

        },  vaciar(){
            this.correo='';
            this.password='';  
        }
    },
    mounted(){
        this.usuarioLogueado()
    }
}
</script>