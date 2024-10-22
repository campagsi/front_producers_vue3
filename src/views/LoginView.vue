<template>
  <h2>Login-------</h2>
  <form @submit.prevent="login">
  <!-- <form>   -->
    <input type="text" placeholder="Seu email">
    <input type="password" placeholder="Seu email">
    <button type="submit">Login</button>
  </form>


</template>

<script setup>

const product = {};
const errorMessage = {};

// POST request using fetch with error handling
const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Headers': 'authorization,content-type,x-clien, Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'  
     },
    body: JSON.stringify({ name: 'Vue 3 POST Request Example' })
};
fetch('http://localhost:3000/users/auth', requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        product.value = data;
    })
    .catch(error => {
        errorMessage.value = error;
        console.error("There was an error!", error);
     });

// import http from '@/services/http.js';
// import {reactive} from 'vue';
// import {useAuth} from '@/stores/auth.js';

//  const auth = useAuth();

//   const user = reactive({
//     email:'campagsi456@gmail.com',
//     password:'121083'
//   })

// async function login(){
//   try {
//     console.log('User-auth1:', );
//     const {data} = await http.post('http://localhost:3000/users/auth',user);
//     console.log('User-auth2:', data); 
    
//     auth.setToken(data.token);
//      auth.setUser(data.user);
//   } catch (error) {
//     console.log('error', error);
//     //console.log(error?.response?.data);
//   }
// }

</script>
