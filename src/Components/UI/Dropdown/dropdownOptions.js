import getNumberRange from '../../../assets/javascript/utilities';
import moment from 'moment';
import api from '../../../assets/javascript/api'

let allSports =  api.getAllSports()
let currentYear = moment().year()

const dropDownOptions = {
  Months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  Years: getNumberRange(currentYear, (currentYear + 20), []),
  States: api.getAllStates()
    .then((states) => {
      console.log('states (╯°□°)╯︵ ┻━┻ ', states)
    }),
  Sports: api.getAllSports()
    .then((sports) => {
      console.log('sports (╯°□°)╯︵ ┻━┻ ', sports)
    }),
  ProgramType: api.getAllProgramTypes()
    .then((programs) => {
      console.log('programs (╯°□°)╯︵ ┻━┻ ', programs)
    }),
  Affiliation: ['US Club Soccer', 'NHL', 'NFL'],
  // api.getAllAffiliations().then((affiliations) => {
  //   console.log('affiliations (╯°□°)╯︵ ┻━┻ ', affiliations)
  // }),
  RelationshipType: api.getAllRelationshipTypes()
  .then((relationship) => {
    console.log('relationship',relationship)
  })
}


export default dropDownOptions;