<template>
<span>
  <div style="margin-bottom: 2rem; padding-top: 1.2rem;">
    <h3>Explore <b style="color: #009E74;">{{ projects.length }} projects</b></h3>
  </div>
  <div class="row">
    <div class="col-md-3 pointer mb-5" :key="project.projectId" v-for="project in projects" @click="$router.push('/project/' + project.projectId)">
          <div class="card">
              <img class="card-img-top" :src="project.imgSrc" alt="Card image cap">
              <div class="card-body">
                  <div class="project-info">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">by {{ project.creator }}</p>
                  </div>

                  <div class="separator">
                    <div style="width: 100%; background-color: #037362;height: 0.3rem;"></div>
                  </div>

                  <div class="project-stats">
                    <span class="text-success">{{ project.amountToRaise }} BLC pledged</span><br>
                    <span>{{ project.amountRaised }} BLC raised</span>
                    <span>{{ project.timeRemaining }} days to go</span><br>
                    <span>{{ project.noOfInvestors }} backers</span><br>
                  </div>
              </div>
          </div>
      </div>
  </div>
</span>
</template>

<script>
import { BACKEND_URL } from '../store/constants.js'
import axios from 'axios'
export default {
  name: 'Home',
  data: function () {
    return {
      projectsMap: {},
      projects: []
    }
  },
  computed: {
    // projects: function () {
    //   return Object.values(this.projectsMap)
    // }
  },
  mounted () {
    axios
      .get(BACKEND_URL + 'projects')
      .then(res => {
        var projects = res.data.projects
        for (var i = 0; i < projects.length; i++) {
          this.projects.push(projects[i])
          this.projectsMap[String(projects[i].projectId)] = projects[i]
        }
      })
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
  .project-info {
    display: block;
    height: 100px;
  }
  .project-stats {
    color: #656969;
  }
  .separator {
    width: 100%;
    margin-bottom: 1.8rem;
    background-color: #E8E8E8;
  }
</style>
