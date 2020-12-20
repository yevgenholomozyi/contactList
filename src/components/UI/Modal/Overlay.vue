<template>
  <div
    :class="[visibleState ? 'overlay' : 'overlay_hidden']"
  >
    <ModalConfirm v-if="typeProp==='delete'" />
    <ModalConfirm
      v-if="typeProp==='rollback'"
      question="Do realy want to rollback?"
      actionProp="Rollback"
    />
    <ModalUpdate v-if="typeProp==='update'" :id="$route.params.id" />
    <ModalAdd v-if="typeProp==='add'" :id="$route.params.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalConfirm from './ModalConfirm.vue';
import ModalUpdate from './ModalUpdate.vue';
import ModalAdd from './ModalAdd.vue';

export default {
  name: 'Overlay',
  components: {
    ModalConfirm,
    ModalUpdate,
    ModalAdd,
  },
  computed: {
    ...mapGetters('overlay', ['visibleState']),
  },
  props: {
    typeProp: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .5);
}
.overlay_hidden {
  display: none;
}
</style>
