import axios from 'axios';

export default axios.create({

baseURL: 'https://api.yelp.com/v3/businesses',
headers:{

    Authorization : 'Bearer NcxrSgzsYTqAmD2BvccNHpII8GHSZ2p01kSDSy9u6qPyr_QMzj2JMj3XkECJF0B0AXv-rY3ZUmQTlICgcxZDH26G9Lcizi1W465AEPln_wPxfoOY8EudY61FkvWKXnYx'
}


});