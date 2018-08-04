<template>
<div class="container">
  <span class="p-5">
      <div class="project-header p-4">
        <div class="creator-info float-left mr-5">
          <img class="rounded-circle img-fluid mb-4" style="width: 3.2rem;" :src="project.creator.imgSrc" alt=""><br>
          <span> By {{ project.creator.name }}</span><br>
          <span style="color: #656969;">{{ project.creator.totalProjects }} created</span>
          <!-- <br>
          <button class="mt-2 btn btn-sm btn-secondary">Follow Creator</button> -->
        </div>
        <div>
          <h2 v-if="!projectEdit.title" @click="projectEdit.title=!projectEdit.title">{{ project.title }}</h2>
          <input type="text" v-model="project.title" v-else @keyup.enter="projectEdit.title=!projectEdit.title">
          <p style="font-size: 1.2rem; color: #656969;" v-if="!projectEdit.description" @click="projectEdit.description=!projectEdit.description">{{ project.description }}</p>
          <textarea rows="3" v-model="project.description" v-else @keyup.enter="projectEdit.description=!projectEdit.description"></textarea>
        </div>
      </div>
      <div class="project-info mt-5">
        <div class="row">
          <div class="col-md-8 p-2">
            <img :src="project.imgSrc" alt="" style="width: 100%;">
          </div>
          <div class="col-md-4 p-2">
            <div class="mb-3" style="width: 100%; background-color: #037362;height: 0.3rem;"></div>
            <div class="mb-3">
              <h2 style="color: #037362; margin-bottom: 0;">{{ project.amountRaised }} BLC</h2>
              <span style="color: #656969;">pledged of {{ project.amountToRaise }} BLC goal</span>
            </div>
            <div class="mb-3">
              <h2 style="margin-bottom: 0;">{{ project.noOfInvestors }}</h2>
              <span style="color: #656969;">backers</span>
            </div>
            <div class="mb-3">
              <h2 style="margin-bottom: 0;">{{ project.timeRemaining }}</h2>
              <span style="color: #656969;">days to go</span>
            </div>
            <button class="btn btn-success btn-block" data-toggle="modal" data-target="#paymentPopup">Back this project</button>
          </div>
        </div>
      </div>
      <hr>
      <div class="project-content">
        <ul class="nav nav-tabs" role="tablist">
          <!-- <li class="nav-item">
            <a class="nav-link active" id="campaign-tab" data-toggle="tab" href="#campaign" role="tab" aria-controls="campaign" aria-selected="true">Campaign</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="faq-tab" data-toggle="tab" href="#faq" role="tab" aria-controls="faq" aria-selected="false">FAQ</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" id="updates-tab" data-toggle="tab" href="#updates" role="tab" aria-controls="updates" aria-selected="false">Proposals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="comments-tab" data-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Comments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="community-tab" data-toggle="tab" href="#community" role="tab" aria-controls="community" aria-selected="false">Community</a>
          </li>
        </ul>
        <div class="tab-content p-5" id="myTabContent">
          <div class="tab-pane fade" id="campaign" role="tabpanel" aria-labelledby="campaign-tab">
            <h2>Campaign</h2>
          </div>
          <div class="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
            <h2>FAQ</h2>
          </div>
          <div class="tab-pane fade show active" id="updates" role="tabpanel" aria-labelledby="updates-tab">
            <div class="card text-center mb-5" v-for="proposal in project.proposals" :key="proposal.id">
              <div class="card-header">
                # {{ proposal.id }}
              </div>
              <div class="card-body" :class="{'bg-success': proposal.isSuccess, 'bg-danger': !proposal.isSuccess && !proposal.isOpen}">
                <h5 class="card-title">{{ proposal.name }}</h5>
                <p class="card-text">{{ proposal.description }}</p>
                <p>{{ proposal.percentageVoted }} % Voted</p>
                <button href="#" class="btn btn-default" style="color: black;" v-if="proposal.hasVoted" disabled>Voted</button>
                <button href="#" class="btn btn-primary" v-else-if="proposal.isOpen">Vote</button>
                <button href="#" class="btn btn-default" style="color: black" v-else disabled>Not Voted</button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
            <h2>Comments</h2>
          </div>
          <div class="tab-pane fade" id="community" role="tabpanel" aria-labelledby="community-tab">
            <h2>Community</h2>
          </div>
        </div>
      </div>
    </span>
    <div id="paymentPopup" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Payment</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Amount in BLC</label>
              <input type="number" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { BACKEND_URL } from '../store/constants.js'
export default {
  name: 'ProjectView',
  data () {
    return {
      project: {},
      projectEdit: {
        title: false,
        description: false
      }
    }
  },
  mounted () {
    axios
      .get(BACKEND_URL + 'investor/' + this.$route.params.id)
      .then(res => {
        this.project = res.data.project
      })
  }
}
</script>

<style>
  a[aria-selected="true"] {
    border-bottom: 3px solid #282828 !important;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    color: #020621 !important;
    font-weight: 600;
  }
  a[aria-selected="true"]:hover, a[aria-selected="false"]:hover {
    color: #2f9e74 !important;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    border-bottom:0;
  }
  a[aria-selected="false"] {
    color: #2e2828 !important;
  }

</style>
