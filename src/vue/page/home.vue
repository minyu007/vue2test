<template>
	<!-- html -->
    <div class="home-page">
    	<top></top>
        <h1>this is home page</h1>
        <router-link class="nav-item" to="/other">to the other page</router-link>
        <bottom></bottom>
    </div>
</template>
<script>
	import Top from '../component/top.vue';
	import Bottom from '../component/bottom.vue';
	const COMPONENT_NAME = 'home-page';

	export default {
		name: COMPONENT_NAME,
		components: {
			Top,
			Bottom
		}
	}
</script>