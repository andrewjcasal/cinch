import request from 'request-promise'

const options = {}

const url = {
  dev: 'http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1'
}
const baseUrl = url.dev

export default {
  getAllOrganizations: function(url) {
    return request(baseUrl + '/organizations') 
  },
  getAllSports: function(url) {
    return request(baseUrl + '/ui/sports')
  },
  getAllAffiliations: function(url) {
    return request(baseUrl + '/ui/governing-bodies')
  },
  getAllProgramTypes: function(url) {
    return request(baseUrl + '/ui/program-types') /*? */
  },
  getAllStates: function(url) {
    return request(baseUrl + '/ui/states') /*? */
  },
  getAllRelationshipTypes: function(url) {
    return request(baseUrl + '/ui/relationship-types')
  }
};

// http://jsonplaceholder.typicode.com/todos
// http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/organizations