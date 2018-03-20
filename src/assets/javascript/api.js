import axios from '../../axios'

const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

const url = {
  dev: 'http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1'
}

export default {
  getAllOrganizations: function(url) {
    return axios.get(url.dev + '/organizations', options) 
  },

  getAllSports: function(url) {
    return axios.get(url.dev + '/ui/sports', options)
  },
  getAllAffiliations: function(url) {
    return axios.get(url.dev + '/ui/governing-bodies', options)
  },
  getAllProgramTypes: function(url) {
    return axios.get(url.dev + '/ui/program-types', options) /*? */
  },
  getAllStates: function(url) {
    return axios.get(url.dev + '/ui/states', options) /*? */
  },
  getAllRelationshipTypes: function(url) {
    return axios.get(url.dev + '/ui/relationship-types', options)
  }
};

// http://jsonplaceholder.typicode.com/todos
// http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/organizations