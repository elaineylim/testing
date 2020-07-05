<template>
  <div>
    <button>
      <userProfileImg />
    </button>
  </div>
</template>

<script>
import UserProfileImg from "~/components/items/UserImage.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {
    UserProfileImg
  },
  computed: {
    ...mapState({
      profileMenu: state => state.dashboard.profileMenu
    })
  },
  methods: {
    ...mapMutations({
      toggleProfileMenu: "dashboard/toggleProfileMenu"
    }),
    ...mapActions({
      signout: "auth/firebaseLogout"
    })
  }
};
</script>
