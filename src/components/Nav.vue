<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";
const { isAuthenticated, logout } = useAuth();
const router = useRouter();
const loggingOut = () => {
  logout();
  router.push("/");
};
</script>



<template>
<div class="text-blue-500 bg-gray-600">
    <div class="container flex items-center justify-between py-4 mx-auto">
        <h1 class="text-2xl font-light tracking-tight">Vue<span class="font-semibold">FakeAuth</span>
        </h1>
        <nav>
            <ul class="flex ">
                <router-link to="/"><li class="px-5 py-4 bg-gray-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white rounded-l-2xl">Home</li></router-link>
                <router-link to="/about"><li class="px-5 py-4 bg-gray-400 hover:cursor-pointer hover:bg-slate-500 hover:text-white">About</li></router-link>
                <router-link v-if="!isAuthenticated" to="/login"><li class="px-5 py-4 bg-gray-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white rounded-r-2xl">Login</li></router-link>
                <div v-else class="flex">
                
                 <router-link  to="/secret"><li class="px-5 py-4 bg-gray-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white">Secret</li></router-link>
                 <button  @click="loggingOut"><li class="px-5 py-4 bg-gray-400 hover:cursor-pointer hover:bg-slate-500 hover:text-white rounded-r-2xl">Logout</li></button>
                </div>
            </ul>
        </nav>
    </div>
</div>
</template>