var app = new Vue({
  el: '#admin',
  data: {
    nounTitle: "",
    adjTitle: "",
    verbTitle: "",
    addYgNoun: null,
    addYgAdj: null,
    addYgVerb: null,
    nouns: [],
    adjs: [],
    verbs: [],
  },
  created() {
    this.getNouns();
    this.getAdjs();
    this.getVerbs();
  },
  methods: {
    async addNoun() {
      try {
        let noun = await axios.post('/api/nouns', {
          title: this.nounTitle,
        });
        this.addYgNoun = noun.data;
        document.getElementById("nounForm").innerHTML = "Added " + this.nounTitle;
      } catch (error) {
        console.log(error);
      }
    },
    async getNouns() {
      try {
        let response = await axios.get("/api/nouns");
        this.nouns = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteNoun(noun) {
      try {
        let response = axios.delete("/api/nouns/" + noun._id);
        this.getNouns();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    
    async addAdj() {
      try {
        let adj = await axios.post('/api/adjs', {
          title: this.adjTitle,
        });
        this.addYgAdj = adj.data;
        document.getElementById("adjForm").innerHTML = "Added " + this.adjTitle;
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
    async deleteAdj(adj) {
      try {
        let response = axios.delete("/api/adjs/" + adj._id);
        this.getAdjs();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    
    async addVerb() {
      try {
        let verb = await axios.post('/api/verbs', {
          title: this.verbTitle,
        });
        this.addYgVerb = verb.data;
        document.getElementById("verbForm").innerHTML = "Added " + this.verbTitle;
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
    async deleteVerb(verb) {
      try {
        let response = axios.delete("/api/verbs/" + verb._id);
        this.getVerbs();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
