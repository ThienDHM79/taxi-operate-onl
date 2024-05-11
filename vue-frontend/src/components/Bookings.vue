<template>
    <div class="Booking">
        <div class="container-fluid">
        <div class="row p-3">
            <div class="card">
                <h4 class="card-header">Trip status</h4>
            </div>
        </div>
    </div>
        <div class="container" id="app">
            <section class="intro mx-3">
                <div class="bg-image h-100" style="background-color: #6095F0;">
                <div class="mask d-flex align-items-center h-100">
                    <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12">
                        <div class="card shadow-2-strong" style="background-color: #f5f7fa;">
                            <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-borderless mb-0 table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Customer Phone</th>
                                    <th scope="col">Taxi Type</th>
                                    <th scope="col">Trip Status</th>
                                    <th scope="col">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>61</td>
                                    <td>Edinburgh</td>
                                    <td>
                                        <button type="button" class="btn btn-danger btn-sm p-3">
                                        <i class="fas fa-times"></i>
                                        </button>
                                    </td>
                                    </tr>
                                    <!-- update to list component use v-bind v-for-->
                                    <tr v-for="trip in TripList" :key="trip.id">
                                    <td>{{trip.customername}}</td>
                                    <td>{{trip.customerphone}}</td>
                                    <td>{{trip.taxitype}}</td>
                                    <td>{{trip.tripstatus}}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger btn-sm px-3">
                                        <i class="fas fa-times"></i>
                                        </button>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="container text-danger">
                    {{ updatedTripEvent }}
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { socket, state } from '@/socket'
// remove hot reload
socket.off()
export default {
  name: 'Booking-Item',
  data () {
    return {
      TripList: [],
      TripEventList: []
    }
  },
  mounted () {
    const SocketIOClient = document.createElement('script')
    SocketIOClient.setAttribute('src', 'https://cdn.socket.io/4.5.4/socket.io.min.js')
    document.head.appendChild(SocketIOClient)
  },
  async created () {
    await this.getTripList()
  },
  computed: {
    updatedTripEvent () {
      console.log(`listened to trip ${state.tripEvents}`)
      return state.tripEvents
    }
  },
  methods: {
    async getTripList () {
      const baseUrl = 'http://localhost:7000'
      const TripListResponse = await axios.get(baseUrl + '/v1/Booking')
      this.TripList = TripListResponse.data
    }
  },
  components: {}
}
</script>
