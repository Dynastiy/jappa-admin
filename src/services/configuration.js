import $request from "@/axios";

const configuration = {
  // Currencies
  // Get All Currencies
  async getCurrencies() {
    return $request.get("admin/currencies").then((response) => response.data);
  },

  //   Create Currency
  async createCurrency(body) {
    return $request
      .post("admin/currencies", body)
      .then((response) => response.data);
  },

  //   Vehicles
  // Get All Vehicles
  async getVehicles() {
    return $request.get("admin/vehicles").then((response) => response.data);
  },

  // Get Vehicle Category
  async getVehicleCategories() {
    return $request
      .get("admin/vehicle-categories")
      .then((response) => response.data);
  },

  //   Create Vehicle Category
  async createVehicleCategory(body) {
    return $request
      .post("admin/vehicle-categories", body)
      .then((response) => response.data);
  },

  // Locations
  // Get All Countries
  async getCountries() {
    return $request
      .get("admin/locations/countries")
      .then((response) => response.data);
  },

  // Get States in a country
  async getStates(id) {
    return $request
      .get(`admin/locations/countries/${id}/states`)
      .then((response) => response.data);
  },

  // Get States in a country
  async getCities(id) {
    return $request
      .get(`admin/locations/states/${id}/cities`)
      .then((response) => response.data);
  },
};

export default configuration;
