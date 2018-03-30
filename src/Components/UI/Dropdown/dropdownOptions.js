import getNumberRange from '../../../assets/javascript/utilities';
import moment from 'moment';
import api from '../../../assets/javascript/api'

let allSports =  api.getAllSports()
let currentYear = moment().year()

const dropDownOptions = {
  Months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  Years: getNumberRange(currentYear, (currentYear + 20), []),
  States: cb => {
    api.getAllStates()
      .then((states) => {
        states = JSON.parse(states)
        cb(Object.values(states))
      })
    },
  Sports: cb => {
    api.getAllSports()
      .then((sports) => {
        sports = JSON.parse(sports)
        cb(Object.values(sports));
      })
    },
  ProgramType: api.getAllProgramTypes()
    .then((programs) => {
      programs = JSON.parse(programs)
      return Object.values(programs)
    }),
  Affiliation: ['US Club Soccer', 'NHL', 'NFL'],
  // api.getAllAffiliations().then((affiliations) => {
  //   console.log('affiliations (╯°□°)╯︵ ┻━┻ ', affiliations)
  // }),
  RelationshipType: api.getAllRelationshipTypes()
  .then((relationship) => {
    relationship = JSON.parse(relationship)
    return Object.values(relationship)
  }),
  Organizations: function(cb) {
    api.getAllOrganizations()
    .then((organizations) => {
      organizations = JSON.parse(organizations)
      cb(organizations.data.map( organization => organization.name));
    })
  }
}


export default dropDownOptions;