<script lang="ts" setup>
	import { computed, inject } from 'vue';
	import { useQuery } from 'vue-query';

	import type UsersGateway from '~/infra/gateway/UsersGateway';

	const usersGateway = inject('usersGateway') as UsersGateway;

	const { data, isLoading } = useQuery('singleUser', async () => await usersGateway.getSingleUser(1));

	const personalTitles = computed(() => (data.value?.gender === 'male' ? 'Mr.' : 'Mrs.'));
</script>

<template>
	<main class="container mx-auto flex h-screen w-full items-center justify-center">
		<div v-if="isLoading">loading</div>
		<div
			v-else
			class="bg-amber/40 border-amber relative rounded-lg border p-5">
			<div class="i-ph-x-bold hover:(scale-150 ) absolute -right-3 -top-3 text-2xl duration-300 ease-in-out" />
			<div class="flex justify-center">
				<img
					:src="data?.image"
					:alt="`Avatar ${data?.firstName}`"
					class="bg-amber/40 border-amber h-16 w-16 rounded-full border" />
			</div>

			<div>
				<small class="text-sm font-bold">Name:</small>
				<h2 class="text-lg">{{ personalTitles }} {{ data?.firstName }} {{ data?.lastName }}</h2>
			</div>
			<div>
				<small class="text-sm font-bold">Age:</small>
				<p>{{ data?.age }}</p>
			</div>
			<div class="flex justify-between">
				<div>
					<small class="text-sm font-bold">City:</small>
					<p>{{ data?.address.city }}</p>
				</div>
				<div>
					<small class="text-sm font-bold">State:</small>
					<p>{{ data?.address.state }}</p>
				</div>
			</div>
		</div>
	</main>
</template>
