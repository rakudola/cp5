var app = new Vue({
  el: '#app',
  data: {
    nouns: [],
    adjs: [],
    verbs: [],
    rng1: 0,
    rng2: 0,
    rng3: 0,
    rng4: 0,
    rng5: 0,
    rng6: 0,
    rng7: 0,
    rng8: 0,
    rng9: 0,
    rng10: 0,
    rng11: 0,
  },
  created() {
    this.getNouns();
    this.getAdjs();
    this.getVerbs();
  },
  methods: {
    async getNouns() {
      try {
        let response = await axios.get("/api/nouns");
        this.nouns = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getAdjs() {
      try {
        let response = await axios.get("/api/adjs");
        this.adjs = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getVerbs() {
      try {
        let response = await axios.get("/api/verbs");
        this.verbs = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    prompt() {
      console.log("In prompt");
      this.rng1 = Math.floor((Math.random() * 1000) + 1) % this.nouns.length;
      this.rng2 = Math.floor((Math.random() * 2000) + 1) % this.adjs.length;
      this.rng3 = Math.floor((Math.random() * 3000) + 1) % this.verbs.length;
      this.rng4 = Math.floor((Math.random() * 4000) + 1) % this.adjs.length;
      this.rng5 = Math.floor((Math.random() * 5000) + 1) % this.nouns.length;
      this.rng6 = Math.floor((Math.random() * 6000) + 1) % this.verbs.length;
      this.rng7 = Math.floor((Math.random() * 7000) + 1) % this.adjs.length;
      this.rng8 = Math.floor((Math.random() * 8000) + 1) % this.nouns.length;
      this.rng9 = Math.floor((Math.random() * 9000) + 1) % this.verbs.length;
      this.rng10 = Math.floor((Math.random() * 10000) + 1) % this.adjs.length;
      this.rng11 = Math.floor((Math.random() * 11000) + 1) % this.nouns.length;
      document.getElementById("prompt").innerHTML = "A(n) " + this.adjs[this.rng2].title + " " + this.nouns[this.rng1].title + " " +
        this.verbs[this.rng3].title +  " a(n) " + this.adjs[this.rng4].title + " " + this.nouns[this.rng5].title + ", " +
        this.verbs[this.rng6].title +  " a(n) " + this.adjs[this.rng7].title + " " + this.nouns[this.rng8].title + ", and " +
        this.verbs[this.rng9].title +  " a(n) " + this.adjs[this.rng10].title + " " + this.nouns[this.rng11].title + ".";
    },
  },
});