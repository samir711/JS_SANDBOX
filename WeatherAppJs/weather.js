class Weather {

  constructor(city,state) {
    this.api = 'b5853fe97c7e44998ef171831182605';
    this.city = city;
    this.state = state;
    }

    // Fetch weather from API
  
  async getWeather(){
    const response = await fetch(
 
      `http://api.apixu.com/v1/current.json?key=${this.api}&q=${this.city}`);
    
    const responseData = await response.json();

    return responseData;
    

  }
  
  // Change weather location

  changeLocation(city, state) {
    
    this.city = city;
    this.state = state;
  }
  
  
}