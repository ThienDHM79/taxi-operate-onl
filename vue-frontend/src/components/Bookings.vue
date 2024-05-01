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
                                        <button type="button" class="btn btn-danger btn-sm px-3">
                                        <i class="fas fa-times"></i>
                                        </button>
                                    </td>
                                    </tr>
                                    <!-- update to list component use v-bind v-for-->
                                    <tr>
                                    <td>Customer name here</td>
                                    <td>location here</td>
                                    <td>destination here</td>
                                    <td>trip status here</td>
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
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Booking-Item',
  components: {}
}
</script>
