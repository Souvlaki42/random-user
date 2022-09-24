const app = Vue.createApp({
    data() {
        return {
            firstName: "Name",
            lastName: "Surname",
            email: "name@example.com",
            gender: "",
            picture: "https://via.placeholder.com/128"
        }
    },
    methods: {
        async getUser() {
            const res = await axios.get("https://randomuser.me/api/", { mode: "cors", origin: "*" });
            const domain = Math.floor(Math.random() * domains.length);
            this.firstName = res.data.results[0].name.first;
            console.log(this.firstName);
            this.lastName = res.data.results[0].name.last
            console.log(this.lastName);
            this.email = `${res.data.results[0].email.split("@")[0]}@${domains[domain]}`;
            this.gender = res.data.results[0].gender;
            this.picture = res.data.results[0].picture.large;
        }
    }
})

app.mount("#app")