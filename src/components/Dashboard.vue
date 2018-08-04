<template>
<div class="row mt-5">
  <br>
  <div class="ml-5 col-md-3 text-center">
    <h2>Investment Projects</h2>
    <pie :chart-data="investedProjectsData" :options="{responsive: true}"></pie>
  </div>
  <div class="ml-5 col-md-3 text-center">
    <h2>Created Projects</h2>
    <pie :chart-data="createdProjectsData" :options="{responsive: true}"></pie>
  </div>
  <div class="ml-5 col-md-3 text-center">
    <h2>Proposals</h2>
    <pie :chart-data="proposalsData" :options="{responsive: true}"></pie>
  </div>
</div>
</template>

<script>
import Pie from './Pie.js'
import axios from 'axios'
import { BACKEND_URL } from '../store/constants.js'
export default {
  components: {
    Pie
  },
  data () {
    return {
      investedProjectsData: null,
      createdProjectsData: null,
      proposalsData: null
    }
  },
  mounted () {
    axios
      .get(BACKEND_URL + 'getUserSummary')
      .then(res => {
        var investedProjectsData = res.data.investedProjectsData
        console.log(investedProjectsData)
        var createdProjectsData = res.data.createdProjectsData
        var proposalsData = res.data.proposalsData
        this.investedProjectsData = {
          labels: ['Projects Completed', 'Projects Closed', 'Projects with Open Proposals'],
          datasets: [
            {
              label: 'ProjectsCount',
              backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
              data: [investedProjectsData.completed, investedProjectsData.closed, investedProjectsData.withOpenProposals]
            }
          ]
        }
        this.createdProjectsData = {
          labels: ['Projects Completed', 'Projects Closed', 'Projects with Open Proposals'],
          datasets: [
            {
              label: 'ProjectsCount',
              backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
              data: [createdProjectsData.completed, createdProjectsData.closed, createdProjectsData.withOpenProposals]
            }
          ]
        }
        this.proposalsData = {
          labels: ['Proposals Created', 'Proposal Approved', 'Proposals Rejected', 'Proposals Pending', 'Total Voted Proposals'],
          datasets: [
            {
              label: 'ProjectsCount',
              backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'],
              data: [proposalsData.created, proposalsData.approved, proposalsData.rejected, proposalsData.pending, proposalsData.totalVoted]
            }
          ]
        }
      })
  }
}
</script>

<style>
.small {
    max-width: 600px;
    margin:  150px auto;
}
</style>

