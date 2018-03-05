import axios from '../../axios'

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

export default {
  getAllOrganizations: function(url) {
    return axios.get('http://jsonplaceholder.typicode.com/todos', headers) 
  }
};


//http://jsonplaceholder.typicode.com/todos
//http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/organizations