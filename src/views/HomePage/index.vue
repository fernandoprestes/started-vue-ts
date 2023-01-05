<script lang="ts" setup>
  import { inject, onMounted, reactive, computed } from 'vue';
  import type UsersGateway from '~/infra/gateway/UsersGateway';
  import type User from '~/@types/User';

  const usersGateway = inject('usersGateway') as UsersGateway;

  const data = reactive({
    isLoading: true,
    user: {} as User,
  });

  onMounted(async () => {
    data.user = await usersGateway.getSingleUser(1);
    data.isLoading = false;
  });

  const personalTitles = computed(() => (data.user.gender === 'male' ? 'Mr.' : 'Mrs.'));
</script>

<template>
  <main class="container mx-auto flex h-screen w-full items-center justify-center">
    <div v-if="data.isLoading">loading</div>
    <div
      v-else
      class="bg-amber/40 border-amber relative rounded-lg border p-5"
    >
      <div class="i-ph-x-bold hover:(scale-150 ) absolute -right-3 -top-3 text-2xl duration-300 ease-in-out" />
      <div class="flex justify-center">
        <img
          :src="data.user.image"
          :alt="`Avatar ${data.user.firstName}`"
          class="bg-amber/40 border-amber h-16 w-16 rounded-full border"
        />
      </div>

      <div>
        <small class="text-sm font-bold">Name:</small>
        <h2 class="text-lg">{{ personalTitles }} {{ data.user.firstName }} {{ data.user.lastName }}</h2>
      </div>
      <div>
        <small class="text-sm font-bold">Age:</small>
        <p>{{ data.user.age }}</p>
      </div>
      <div class="flex justify-between">
        <div>
          <small class="text-sm font-bold">City:</small>
          <p>{{ data.user.address.city }}</p>
        </div>
        <div>
          <small class="text-sm font-bold">State:</small>
          <p>{{ data.user.address.state }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
