<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="mt-3">
                    <label class="form-label">Descripcion</label>
                    <input v-model="descripcion" type="text" class="form-control">
                </div>
                <div class="mt-2">
                    <label class="form-label">Precio</label>
                    <input v-model="precio" type="number" class="form-control">
                </div>
                <div class="mt-2">
                    <label class="form-label">Porcentaje de descuento</label>
                    <input v-model="descuento" type="number" max="99" class="form-control">
                </div>
                <div class="mt-2">
                    <label class="form-label">Categoria</label>
                    <input v-model="categoria" type="text" class="form-control">
                </div>
                <div class="mt-2">
                    <label class="form-label">Stock</label>
                    <input v-model="stock" type="number" class="form-control">
                </div>
                <div class="mt-2">
                    <label class="form-label">Estado</label>
                    <select v-model="estado" class="form-select ">
                    <option selected>Activo</option>
                    <option>Inactivo</option>
                    </select>
                </div>
                <div class="mt-2">
                    <label class="form-label">Precio</label>
                <input @change="vistaPrevia()" id="inp_file" class="form-control" type="file" multiple>
                </div>
                <div class="mt-3">
                    <img class="img-fluid" :src="preview">
                </div>
                <button v-if="boton==1" @click="actualizarProducto()" class="btn btn-primary ms-3 mt-3">Actualizar</button>
                <button v-if="boton==0" @click="guardarProducto()" class="btn btn-success mt-3">Guardar</button>
            </div>
            <div class="col-9 mt-3">
                
                <table class="table">
                    <thead>
                        <th>IMG</th>
                        <th>DESCRIPCION</th>
                        <th>PRECIO</th>
                        <th>% DESCUENTO</th>
                        <th>CATEGORIA</th>
                        <th>STOCK</th>
                        <th>ESTADO</th>
                        <th>ACCIONES</th>
                    </thead>
                    <tbody>
                        <tr v-for="producto of listaProductos" v-bind:key="producto.id" >
                            <td><img style="width:3.5rem" :src="producto.url"> </td>
                            <td>{{producto.descripcion}}</td>
                            <td><p>$ {{producto.precio}} </p></td>
                            <td><p>{{producto.descuento}} %</p> </td>
                            <td>{{producto.categoria}}</td>
                            <td>{{producto.stock}}</td>
                            <td>{{producto.estado}}</td>
                            <td>
                                <button @click="editar(producto)" class="btn btn-info btn-sm">Editar</button>
                                <button @click="eliminarProducto(producto.id)" class="btn btn-danger ms-2 btn-sm">X</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import {db,storage} from '@/utils/firebase.js'
import {addDoc, collection, onSnapshot,deleteDoc,doc, updateDoc} from 'firebase/firestore'
import{ref,uploadBytes,getDownloadURL} from 'firebase/storage'
export default {
    name:'CatalogoAdminForm',
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
            boton:0
        }
    },
    methods:{
        async guardarProducto(){
            await this.subirImagen()
            const unProducto={
                descripcion:this.descripcion,
                precio:this.precio,
                descuento:this.descuento,
                categoria:this.categoria,
                stock:this.stock,
                estado:this.estado,
                url:this.url
            }
            const coleccion= collection(db,'producto')
            await addDoc(coleccion,unProducto)
            this.limpiar()
        },
        obtenerProductos(){
            onSnapshot(collection(db,'producto'),(snapshot)=>{
                this.listaProductos=[]
                snapshot.docs.map((doc)=>{
                    this.listaProductos.push({...doc.data(),id:doc.id})
                })
            })
            

        },
        eliminarProducto(id){
            deleteDoc(doc(db,'producto',id))
        },
        editar(unProducto){
            this.descripcion=unProducto.descripcion;
            this.precio=unProducto.precio;
            this.descuento=unProducto.descuento;
            this.categoria=unProducto.categoria;
            this.stock=unProducto.stock;
            this.estado=unProducto.estado;
            this.id=unProducto.id;
            this.boton=1;
        },
        async actualizarProducto(){
            const productoModificado={
                descripcion:this.descripcion,
                precio:this.precio,
                descuento:this.descuento,
                categoria:this.categoria,
                stock:this.stock,
                estado:this.estado
            }
            await updateDoc(doc(db,'producto',this.id),productoModificado)
            this.limpiar()
            this.boton=0;
        },
        async subirImagen(){
            const archivo= document.getElementById("inp_file").files[0]
            const config = ref(storage,'producto/'+ archivo.name)
            await uploadBytes(config,archivo).then(()=>{alert('Operaciòn exitosa')})
            this.url = await getDownloadURL(config)

        },
        vistaPrevia(){
            this.preview = URL.createObjectURL(document.getElementById("inp_file").files[0])
        },
        limpiar(){
            this.descripcion='';
            this.precio=null;
            this.descuento=null;
            this.categoria='';
            this.stock='';
            this.estado='';
        }
    },
    mounted(){
        this.obtenerProductos()
    }
}

</script>