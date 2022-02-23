<script>
import useAuth from "../composables/useAuth";
const {isAuthenticated, logout} = useAuth();
</script>



<template>
<div class="text-blue-500 bg-gray-600">
    <div class="container flex items-center justify-between py-4 mx-auto">
        <h1 class="text-2xl font-light tracking-tight">Vue<span class="font-semibold">FakeAuth</span>
        </h1>
        <nav>
            <ul class="flex ">
                <router-link to="/"><li class="px-5 py-4 bg-gray-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white">Home</li></router-link>
                <router-link to="/about"><li class="px-5 py-4 bg-gray-400 hover:cursor-pointer hover:bg-slate-500 hover:text-white">About</li></router-link>
                <router-link v-if="!isAuthenticated" to="/login"><li class="px-5 py-4 bg-gray-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white">Login</li></router-link>
                
                <router-link v-else to="/secret"><li class="px-5 py-4 bg-gray-400 hover:cursor-pointer hover:bg-slate-500 hover:text-white">Secret</li></router-link>
                <button v-else @click="logout"><li class="px-5 py-4 bg-gray-300 hover:cursor-pointer rounded-r-2xl hover:bg-slate-500 hover:text-white">Logout</li></button>
            </ul>
        </nav>
    </div>
</div>
</template>