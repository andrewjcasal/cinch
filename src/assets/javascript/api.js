import request from 'request-promise'

const options = {}

const url = {
  dev: 'http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1'
}
const baseUrl = url.dev

export default {
  getAllOrganizations: function() {
    return request(baseUrl + '/organizations') 
  },
  getAllSports: function() {
    return request(baseUrl + '/ui/sports')
  },
  getAllAffiliations: function() {
    return request(baseUrl + '/ui/governing-bodies')
  },
  getAllProgramTypes: function() {
    return request(baseUrl + '/ui/program-types')
  },
  getAllStates: function() {
    return request(baseUrl + '/ui/states')
  },
  getAllRelationshipTypes: function() {
    return request(baseUrl + '/ui/relationship-types')
  }
};