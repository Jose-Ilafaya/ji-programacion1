<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>         
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/catalogopublic">Catalogo</router-link> 
        </li>
        <li v-if="user?.email!=null"  class="nav-item">
          <router-link class="nav-link" to="/catalogoadmin">Cargar Pruductos</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        
        <li v-if="user?.email!=null" class="nav-item navbar-brand "><h5>{{user.email}}</h5></li>
        <li v-if="user?.email==null" class="nav-item">
            <router-link  class="nav-link " to="/Autenticacion" >Ingresar</router-link>
        </li>
        <li v-if="user?.email!=null" class="nav-item">
          <button  @click="cerrarSesion()" class="btn nav-link ">Cerrar Sesion</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-view></router-view>
</template>
<script>
import {auth} from '@/utils/firebase.js'
import {onAuthStateChanged,signOut} from 'firebase/auth'
export default {
  data(){
    return{
    user:null
      
    }
  },
  methods:{
    usuarioLogueado(){
      onAuthStateChanged(auth, (user)=>{
        this.user =user;
      })
    },
    async cerrarSesion(){
       await signOut(auth)
    }
  },
  mounted(){
    this.usuarioLogueado()
  }
}
</script>