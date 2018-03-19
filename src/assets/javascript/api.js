import axios from '../../axios'

const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

export default {
  getAllOrganizations: function(url) {
    return axios.get('http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/organizations', options) 
  },

  getAllSports: function(url) {
    return axios.get('http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/ui/sports', options)
  },
  getAllAffiliations: function(url) {
    return axios.get('http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/ui/governing-bodies', options)
  },
  getAllProgramTypes: function(url) {
    return axios.get('http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/ui/program-types', options) /*? */
  },
  getAllStates: function(url) {
    return axios.get('http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/ui/states', options) /*? */
  },
};

// http://jsonplaceholder.typicode.com/todos
// http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/organizations