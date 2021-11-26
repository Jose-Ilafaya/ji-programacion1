<template>
<div class="container">
    <div class="row">
            <div class="col-auto" v-for="p of listaProductos" v-bind:key="p.id">
                <div v-if="p.estado!='Inactivo'">
                        <div  class="card m-3 h-100" style="width: 18rem;">
                        <img style="width:25rem; height:16rem" :src="p.url" class="card-img-top img-thumbnail" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{p.descripcion}}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{{p.estado}}</li>
                            <li  v-if="p.descuento>0" class="list-group-item"><p>${{p.precio-(p.precio - p.descuento)/100}}  ($<del>{{p.precio}}</del>)</p> </li>
                            <li  v-else class="list-group-item">{{p.precio}}</li>
                        </ul>
                        <div class="card-body text-center">
                            <a class="btn btn-primary" href="#" role="button">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</div>
</template>
<script>
import {db} from '@/utils/firebase.js'
import {collection, onSnapshot} from 'firebase/firestore'
export default {
    name:'Catalogo',
    data(){
        return{
            descripcion:'',
            precio:null,
            descuento:'',
            categoria:'',
            stock:null,
            estado:'',
            id:null,
            listaProductos:[],
            url:null,
            preview:null,
            precioDesc:''
        }
    },
    methods:{
        obtenerProductos(){
            onSnapshot(collection(db,'producto'),(snapshot)=>{
                this.listaProductos=[]
                snapshot.docs.map((doc)=>{
                    this.listaProductos.push({...doc.data(),id:doc.id})
                })
            })
        }
    },
    mounted(){
        this.obtenerProductos()
    }
}
</script>